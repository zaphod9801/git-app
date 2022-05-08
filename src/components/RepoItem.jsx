import { Th, Tr, Text, Tag, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export function RepoItem(repo) {

    return (
        <>
            <Tr>
                <Th><Text fontSize="l" color="gray.500">  {repo.name} </Text></Th>
                <Th><Text fontSize="l" color="gray.500">  {repo.language} </Text></Th>
                <Th><Text fontSize="l" color="gray.500">  {repo.html_url} </Text></Th>
                <Th><Text fontSize="l" color="gray.500">  {repo.updated_at ? repo.updated_at.split("T")[0] : null} </Text></Th>
                <Th>
                    <Text fontSize="l" color="gray.500">
                        {repo.tags_url} <Spacer />
                        <a href={repo.tags_url} target="_blank" rel="noopener noreferrer" mb={2}>
                            <Tag fontSize="md" bg="blue.200">
                                see more
                            </Tag>
                        </a>
                    </Text>
                </Th>
                <Th>
                    <Text fontSize="l" color="gray.500">
                        {repo.branches_url} <Spacer />
                        <Link to={`/branches`} state={{ from: repo }} mb={2}>
                            <Tag fontSize="md" bg="blue.200">
                                see more
                            </Tag>
                        </Link>
                    </Text>
                </Th>
            </Tr>
        </>
    );

}