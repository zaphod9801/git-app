import { Th, Tr, Text } from "@chakra-ui/react";

export function BranchItem(branch) { //Function that renders the specified branch needed info

    return (
        <>
            <Tr>
                <Th><Text fontSize="l" color="gray.500">  {branch.name} </Text></Th>
                <Th><Text fontSize="l" color="gray.500">  {branch.commit.url} </Text></Th>
            </Tr>
        </>
    );

}
