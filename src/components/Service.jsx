import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Service = ({ title, image, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #f5f5f5",
        borderRadius: "16px",
        padding: "32px",
        gap: "32px",
        cursor: "pointer",
      }}
    >
      <IconButton>
        <img className="serviceLogo" src={image} alt="" />
      </IconButton>
      <Link underline="none">
        <Typography sx={{ color: "#000", fontSize: "18x" }}>
          {t(title)}
        </Typography>
      </Link>
    </Box>
  );
};
