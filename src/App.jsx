import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Home } from "./components/Home";


export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registro" element={<Signup />} />
        <Route path="inicio" element={<Home />} />
      </Routes>
    </>

  );
}

