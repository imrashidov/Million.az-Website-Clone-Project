import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { Services } from "./components/Services.jsx";
import { Footer } from "./components/Footer.jsx";
import { servicesData } from "./database/servicesData.jsx";
import { menuItemsData } from "./database/menuItemsData.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Navbar clickHandle={clickHandle} />
      <Services servicesData={servicesData} clickHandle={clickHandle} />
      <Footer menuItemsData={menuItemsData} clickHandle={clickHandle} />
    </>
  );
}

export default App;
