import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/getInfo";
import { Box, Flex, Text , Table, TableContainer, Thead, Tr, Th, Tbody, TableCaption, Spacer, Center, Image} from "@chakra-ui/react";
import { BranchItem } from "./BranchItem";
import { TableHeadBranches } from "./TableHeadBranches";

export function BranchesDetails () {
    const [branches, setBranches] = useState([]);
    const location = useLocation();
    const { from } = location.state;
    
    useEffect (() => {
        API.getBranchesByRepo(from.name, from.owner.login)
        .then((res) => setBranches(res)   
        ).catch(console.log);
    }, []);
    
    
    
    return (
        <>
     <Center>
     <Flex color='white'>
    
      <Box bg="gray.200" pr={10} pt={5} mt={3} borderRadius = "lg"> 
      <Text pl={10} pt={2} pb={5} fontSize="xl" color="gray.500" align="center"> 
              Repository: <strong>{from.name}</strong>
            </Text>
      </Box>
     </Flex>
     </Center> 
     <Center>
     <Flex color='white'>  
         <Box bg="gray.200" m={4} p={2} borderRadius = "lg"> 
             <TableContainer >
                  <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Repository Branches</TableCaption>
                        <Thead>
                          <TableHeadBranches />
                        </Thead>
                        <Tbody>
                          {branches.map(branch => (
                                        <BranchItem key={branch.id} {...branch} />
                          ))} 
                        </Tbody>
                  </Table>
                </TableContainer>
            </Box>
        </Flex>
        </Center>
        </>
    );

}