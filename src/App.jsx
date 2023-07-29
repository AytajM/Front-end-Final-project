import React, { useEffect } from "react";
import "./App.css";
import "./App2.css";
import "./responsive.css";
import "./Responsive2.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Company from "./pages/Company";
import CareerPage from "./pages/CareerPage";
import Blog from "./pages/Blog"
import SingleBlog from "./pages/SingleBlog"
import Contact from "./pages/Contact";
import Singlepage from "./pages/Singlepage";
import Privacypolicy from "./pages/Privacypolicy";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import RequestPage from "./pages/RequestPage";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";


function App() {
  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = ["", "single", "service", "company", "career", "blogs", "blog", "contact", "Privacypolicy", "team", "request"]
  const routesForSection = ["", "single", "service", "company", "career", "blogs", "blog"]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {routes.includes(route) &&
        <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single/:id" element={<Singlepage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {routesForSection.includes(route) &&
        <Section />}
      {routes.includes(route) &&
        <Footer />}
    </>
  );
}

export default App;
