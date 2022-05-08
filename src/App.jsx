import { Route, Routes } from "react-router-dom";
import { User } from "./components/User";
import { ReposDetails } from "./components/ReposDetails";
import { BranchesDetails } from "./components/BranchesDetails";


export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="repos" element={<ReposDetails />} />
        <Route path="branches" element={<BranchesDetails />} />
      </Routes>
    </>

  );
}

