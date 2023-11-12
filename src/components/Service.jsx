import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { servicesData } from "../database/servicesData.jsx";

export const Service = ({ title, image, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        width: { md: "auto", xs: "110px" },
        height: { md: "auto", xs: "100px" },
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #f5f5f5",
        borderRadius: "16px",
        padding: { md: "32px", xs: "16px" },
        gap: { md: "32px", xs: "8px" },
        cursor: "pointer",
      }}
    >
      <Box sx={{ width: { md: "60px", xs: "32px" } }}>
        <Box>
          <img className="serviceLogo" src={image} alt="" />
        </Box>
      </Box>
      <Link underline="none">
        <Typography
          sx={{ color: "#000", fontSize: { md: "18px", xs: "10px" } }}
        >
          {t(title)}
        </Typography>
      </Link>
    </Box>
  );
};
