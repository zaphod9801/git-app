import {Th, Tr, Text} from "@chakra-ui/react";



export function RepoItem (repo) {
     
    return (
        <>
        <Tr>
            <Th><Text fontSize="l" color="gray.500">  {repo.name} </Text></Th>
            <Th><Text fontSize="l" color="gray.500">  {repo.language} </Text></Th>
            <Th><Text fontSize="l" color="gray.500">  {repo.html_url} </Text></Th>
            <Th><Text fontSize="l" color="gray.500">  {repo.updated_at ? repo.updated_at.split("T")[0] : null} </Text></Th>
            <Th><Text fontSize="l" color="gray.500">  {repo.tags_url} (see more) </Text></Th>
            <Th><Text fontSize="l" color="gray.500">  {repo.branches_url} (see more) </Text></Th>
        </Tr>
        </>
    );

}