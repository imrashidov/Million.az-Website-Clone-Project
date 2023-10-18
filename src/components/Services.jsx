import React from "react";
import { Service } from "../components/Service.jsx";
import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Services = ({ services, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "48px",
        borderRadius: "16px",
      }}
    >
      <Box className="shadowLeft"></Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 48px",
          borderRadius: "16px",
          backgroundColor: "#fff",
        }}
      >
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component="h3"
              sx={{
                position: "relative",
                fontSize: "2rem",
                fontWeight: "600",
                lineHeight: "1.2",
                "&::before": {
                  marginRight: "38px",
                  content: `""`,
                  width: "2px",
                  borderLeft: "5px solid #de352f",
                  height: "38px",
                  borderRadius: "16px",
                  left: "0",
                },
              }}
            >
              {t("Xidmətlər")}
            </Typography>
            <Link
              underline="none"
              sx={{
                cursor: "pointer",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "120%",
                color: "#de352f",
                border: "1px solid #de352f",
                borderRadius: "16px",
                padding: "12px 32px",
              }}
            >
              {t("Hamısına bax")}
            </Link>
          </Box>
        </Box>
        <Box sx={{ marginTop: "48px" }}>
          <Box
            className="services"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "32px",
            }}
          >
            {services.map((service) => {
              return (
                <Service
                  clickHandle={clickHandle}
                  key={service.id}
                  {...service}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
