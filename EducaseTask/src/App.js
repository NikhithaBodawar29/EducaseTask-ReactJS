import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import CreateAccount from "./CreateAccount";
import Login from "./Login"; // path must be correct
import AccountSettings from "./AccountSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
