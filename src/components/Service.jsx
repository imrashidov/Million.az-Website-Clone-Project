import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Service = ({ title, image, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
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
      <Box sx={{ width: { md: "100%", xs: "100%" } }}>
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
