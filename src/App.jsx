import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { Services } from "./components/Services.jsx";
import { Footer } from "./components/Footer.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const [services, setServices] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const fetchServices = async () => {
    const response = await axios.get("http://localhost:3000/services");
    setServices(response.data);
  };
  const fetchMenuItems = async () => {
    const response = await axios.get("http://localhost:3000/menuItems");
    setMenuItems(response.data);
  };
  useEffect(() => {
    fetchServices();
    fetchMenuItems();
  }, []);

  const { t, i18n } = useTranslation();
  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <Navbar clickHandle={clickHandle} />
      <Home clickHandle={clickHandle} />
      <Services services={services} clickHandle={clickHandle} />
      <Footer menuItems={menuItems} clickHandle={clickHandle} />
    </>
  );
}

export default App;
