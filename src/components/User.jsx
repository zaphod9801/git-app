import { useState, useEffect, useRef } from "react";
import { Heading, Center, Icon, Spacer, Input, Box, Flex } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import * as API from "../services/getInfo";
import { UserItem } from "./UserItem";




export function User() {
  const [user, setUser] = useState({});  //All the necessary const we need
  const [emails, setEmails] = useState([])
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);

  const usernameRef = useRef(); //To check the value in the search bar

  const handleUserSearch = () => { //Function that try to ask for the written username in the search bar in the Github API
    var usernameP = usernameRef.current.value;
    const username = usernameP.split(' ').join('');
    if (user === '') return;

    setUser(async (req, res) => {
      try {
        const res = await API.getUserByUsername(username); 
        return setUser(res);
      } catch (message) {
        return console.log(message);
      }
    });

    API.getMailsByUsername().then(setEmails);
    API.getReposByUsername(username).then(setRepos);
    API.getOrgsByUsername().then(setOrgs);


    usernameRef.current.value = null;
  }

  useEffect(() => {  //Change page title
    document.title = "Git hub users"
  }, []);


  return (
    <>

      <Center>
        <Heading as="h1" size="lg" m={4}>
          Github Users
        </Heading>
      </Center>
      <Flex mt={-4}>
        <Box p='4'>

        </Box>
        <Spacer />
        <Box p='4'> //Search bar and search button
          <Input ref={usernameRef} variant='filled' placeholder="Username" _placeholder={{ color: 'black' }} htmlSize={30} width='auto' />
          <button onClick={handleUserSearch} > <Icon as={BiSearchAlt} color="blue.500" w={7} h={7} ml={3} mt={1} mb={-3}> </Icon> </button>
        </Box>
      </Flex>



      {!user === 0 ? (
        <div> Loading... </div>

      ) : (

        <section> 
          <UserItem user={user} emails={emails} repos={repos} orgs={orgs} />
        </section>
      )
      }


    </>
  )

}
