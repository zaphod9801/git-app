import {Th, Tr, Text} from "@chakra-ui/react";



export function TableHeadBranches () {
     
    return (
        <>
        <Tr>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Name </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Last Commit </Text></Th>
        </Tr>
        </>
    );

}