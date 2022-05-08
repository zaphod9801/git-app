import { Image} from "@chakra-ui/react";
import { Route, Routes} from "react-router-dom";
import logo from "./assets/logo-spacex.png";
import { User } from "./components/User";
import {ReposDetails} from "./components/ReposDetails";
import { RocketDetails } from "./components/RocketDetails";


export function App() {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="repos" element={<ReposDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
    
  );
}

