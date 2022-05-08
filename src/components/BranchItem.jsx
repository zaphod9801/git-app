import {Th, Tr, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";



export function BranchItem (branch) {
     
    return (
        <>
        <Tr>
            <Th><Text fontSize="l" color="gray.500">  {branch.name} </Text></Th>
            <Th><Link to={``}><Text fontSize="l" color="gray.500">  {branch.commit.url} </Text></Link></Th>
        </Tr>
        </>
    );

}