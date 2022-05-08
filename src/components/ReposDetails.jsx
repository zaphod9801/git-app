import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/getInfo";
import { Box, Flex, Text, Table, TableContainer, Thead, Tr, Th, Tbody, TableCaption, Spacer, Center, Image } from "@chakra-ui/react";
import { RepoItem } from "./RepoItem";
import { TableHead } from "./TableHead";

export function ReposDetails() {
  const [repos, setRepos] = useState([]); //The necessary consts
  const location = useLocation();
  const { from } = location.state;

  useEffect(() => { //Change the page title and try to ask the Github API for the searched user repositories when the page load
    document.title = "GIt hub repos"
    API.getReposByUsername(from.login)
      .then((res) => setRepos(res)
      ).catch(console.log);
  }, []);



  return (
    <>
      <Center>
        <Flex color='white'> //Flex to display ordered the searched user avatar and username

          <Box bg="gray.200" pr={8} pt={1} mt={3} borderRadius="lg">
            <Image m={3} pl={6} src={from.avatar_url} width={100} />
          </Box>

          <Box bg="gray.200" pr={10} pt={5} mt={3} borderRadius="lg">
            <Text pl={10} pt={5} fontSize="xl" color="gray.500" align="center">
              Username: <strong>{from.login}</strong>
            </Text>
          </Box>
        </Flex>
      </Center>
      <Flex color='white'>
        <Box bg="gray.200" m={4} ml={3} borderRadius="lg">
          <TableContainer > //Table containing all the searched user repositories
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>User Repositories</TableCaption>
              <Thead>
                <TableHead /> //Component that contains the table header, check TableHead.jsx
              </Thead>
              <Tbody>
                {repos.map(repo => ( //Mapping in the list of repositories, check RepoItem
                  <RepoItem key={repo.id} {...repo} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );

}
