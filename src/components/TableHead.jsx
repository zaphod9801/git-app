import { Th, Tr, Text } from "@chakra-ui/react";



export function TableHead() {

    return (
        <>
            <Tr>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Name </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Language </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> URL </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Last updated </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Tags </Text></Th>
                <Th><Text as='i' fontSize="xl" color="gray.500"> Branches</Text></Th>
            </Tr>
        </>
    );

}