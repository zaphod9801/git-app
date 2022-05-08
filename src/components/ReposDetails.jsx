import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/getInfo";
import { Box, Flex, Text, Table, TableContainer, Thead, Tr, Th, Tbody, TableCaption, Spacer, Center, Image } from "@chakra-ui/react";
import { RepoItem } from "./RepoItem";
import { TableHead } from "./TableHead";

export function ReposDetails() {
  const [repos, setRepos] = useState([]);
  const location = useLocation();
  const { from } = location.state;

  useEffect(() => {
    document.title = "GIt hub repos"
    API.getReposByUsername(from.login)
      .then((res) => setRepos(res)
      ).catch(console.log);
  }, []);



  return (
    <>
      <Center>
        <Flex color='white'>

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
          <TableContainer >
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>User Repositories</TableCaption>
              <Thead>
                <TableHead />
              </Thead>
              <Tbody>
                {repos.map(repo => (
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