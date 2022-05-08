import {Box, Flex, Text, Spacer, Tag, Button, Icon, Image, ListItem, ListIcon, List, Center, Tbody, Table, Tr} from "@chakra-ui/react";
import {BiUserCircle, BiMailSend, BiCalendarCheck} from "react-icons/bi"
import {FiTwitter} from "react-icons/fi"
import {Link} from "react-router-dom";
import { useState, useEffect} from "react";




export function UserItem ({user, emails, repos, orgs}) {
     
    
    return (
    
      <>
      {user.message === "Not Found" ? (
        
        <Center>  
        <Flex color='white'>
          <Box bg="gray.200" p={4} m={4} borderRadius = "lg">
            <Text fontSize="2xl" color="red"> 
              <strong>User not found</strong>
            </Text>
          </Box>
        </Flex>
        </Center>
       
    
    ): (
     
      <Table variant='simple' >
      <Center> 
      <Tbody>
      <Tr>
      <Flex color='white'>
      
      <Box bg="gray.200" p={4} m={4} borderRadius = "lg"> 
        <Image m={4} src={user.avatar_url} width={200} />
      </Box>
    
      <Box bg="gray.200" p={4} m={4} borderRadius = "lg"> 
      
        <List spacing={4}>
          
          <ListItem>
            <ListIcon as={BiUserCircle} color='gray.500' />
            <Text fontSize="xl" color="gray.500"> 
              Username: <strong>{user.login}</strong>
            </Text>
          </ListItem>
          <ListItem>
          <ListIcon as={BiCalendarCheck} color='gray.500' />
            <Text fontSize="lg" ml={1} color="gray.500">
              Date Created: {user.created_at ? user.created_at.split("T")[0] : null}
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FiTwitter} color='gray.500' />
            <Text fontSize="lg" color="gray.500"> 
              Twitter: <strong>{user.twitter_username}</strong>
            </Text>
          </ListItem>
        </List>
          
        <Tag fontSize="md" color="gray.500" mt={2}>
        Repositories: {repos.length}
        </Tag>
        <Tag fontSize="md" color="gray.500" mt={2}>
        Organizations: {orgs.length}
        </Tag>
      </Box>
      
     </Flex>
     </Tr>
     <Tr>
     <Flex color='white'>
     <Box bg="gray.200" m={4} borderRadius = "lg" p={10} pr={180}> 
     <List>
     <ListItem>
            <ListIcon as={BiMailSend} color='gray.500' />
            <Text fontSize="lg" color="gray.500"> 
              Mails: 
            </Text>
            <List>
            {emails.map(email => (
              <ListItem key={email.id}>
              <Text fontSize="md" color="gray.500"> 
                - {email.email}
              </Text>
              </ListItem>  
            ))}
            </List>
          </ListItem>
     </List>
     </Box>
     </Flex>
     </Tr>
     </Tbody>
     </Center>
     </Table>
      
    
    )
    
    
     }
      
      
      </>
      
    );

}