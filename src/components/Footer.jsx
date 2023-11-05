import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FooterMenuItems } from "./FooterMenuItems.jsx";
import visaLogo from "../images/visa-logo.png";
import mastercardLogo from "../images/mastercard-logo.png";
import appstoreLogo from "../images/appstore-logo.png";
import googleplayLogo from "../images/googleplay-logo.png";
import millioncallLogo from "../images/millioncall-footer.png";
import { useTranslation } from "react-i18next";

export const Footer = ({ menuItems, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ marginTop: "30px", padding: "0px 16px 0px 16px" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "64px",
          paddingBottom: "24px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(124px,1fr))",
            gridRowGap: "22px",
            gridColumnGap: "35px",
          }}
        >
          {menuItems.map((menuItem) => {
            return (
              <FooterMenuItems
                clickHandle={clickHandle}
                key={menuItem.id}
                {...menuItem}
              />
            );
          })}
        </Box>

        <Box
          className="footerBottom"
          sx={{
            marginTop: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="footerBottomInfo" sx={{ width: "220px" }}>
            <Box className="footerBottomLogos">
              <img src={visaLogo} alt="" />
              <img className="bottomLogo" src={mastercardLogo} alt="" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: ".75rem",
                color: "#221f20",
                opacity: ".6",
              }}
            >
              {t("Bütün hüquqlar qorunur")} © 2023 <strong>MilliÖn</strong>
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: ".75rem",
                color: "#221f20",
                opacity: ".6",
              }}
            >
              Developed by <strong>Crocusoft</strong>
            </Typography>
          </Box>
          <Box
            className="footerBottomCenter"
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <IconButton>
              <img src={appstoreLogo} alt="" />
            </IconButton>
            <IconButton>
              <img src={googleplayLogo} alt="" />
            </IconButton>
          </Box>
          <Box className="footerBottomCall">
            <IconButton>
              <img src={millioncallLogo} alt="" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
