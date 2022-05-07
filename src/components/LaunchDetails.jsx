import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/getInfo";
import { Box, Flex, Spacer, Tag, Text } from "@chakra-ui/react";

export function UserDetails () {

    const [launch, setLaunch]= useState({});
    const {launchId} = useParams();
    
    useEffect (() => {
        API.getLaunchByFlightNumber(launchId)
        .then((res) => setLaunch(res)   
        ).catch(console.log);
        
    }, [launchId ]);
    
    return (
        <>
    
            <Box bg="gray.200" p={4} m={4} borderRadius = "lg">
                {!launch ? (
                    <div> Loading... </div>
                
                ): (
                <>
                <Flex display="flex">
                    <Text fontSize="2xl"> 
                      Mission <strong>{launch.mission_name}</strong>
                      ({launch.launch_year})
                    </Text>
                    <Spacer />
                    <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}> 
                    {launch.launch_success ? "Success" : "Failure"}
                    </Tag>
                </Flex>  
                <Box>
                    
                    Rocket:  <Link to={`/rockets/${launch.rocket?.rocket_id}`}>  
                    {launch.rocket?.rocket_name}
                    </Link>
                </Box>
                
                </>
                
                
                
                
                )
                
                
                }
                
            </Box>
        
        </>
    );

}