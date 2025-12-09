import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/inbox" element={<Inbox />} />
             <Route path="/profile" element={<Profile/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
