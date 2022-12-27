import React from "react";
import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import APIs from "./pages/APIs/APIs";
import Services from "./pages/Services/Services";
import Videos from "./pages/Videos/Videos";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import UserProfile from "./pages/UserProfile/UserProfile";


const App: React.FC = () => {
  const { pathname } = useLocation();

  const setTitle = () => {
    const title = pathname.slice(1, pathname.length)

    if (pathname === "/") {
      return (document.title = "Home");
    }
    return (document.title = title[0].toUpperCase() + title.substring(1));
  };

  React.useEffect(() => {
    setTitle();
  }, [pathname]);

  return (
    <div className="App" id="light-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apis" element={<APIs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
