import React from "react";
import { Service } from "../components/Service.jsx";
import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Services = ({ servicesData, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      className="servicesDiv"
      sx={{
        position: "flex",
        width: "100%",
        paddingTop: { md: "48px", xs: "0px" },
        borderRadius: "16px",
      }}
    >
      <Box
        className="shadowLeft"
        sx={{
          position: "absolute",
          width: { md: " 415.12px", xs: "202px" },
          height: { md: " 350.11px", xs: "172px" },
          left: "0",
          background: " #de352f",
          opacity: { md: " 0.23", xs: "0.15" },
          filter: "blur(94px)",
          zIndex: { md: "-1", xs: "1" },
        }}
      ></Box>
      <Box
        sx={{
          maxWidth: { md: "1200px" },
          marginLeft: "auto",
          marginRight: "auto",
          padding: { md: "40px 48px", xs: "30px 20px 96px 20px" },
          borderRadius: "16px",
          backgroundColor: "#fff",
          zIndex: { md: "1", xs: "-1" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component="h3"
              sx={{
                display: { md: "block", xs: "none" },
                position: "relative",
                fontSize: { md: "2rem", xs: "1.5rem" },
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
            <Typography
              component="h3"
              sx={{
                display: { md: "none", xs: "flex" },
                position: "relative",
                fontSize: { md: "2rem", xs: "1.5rem" },
                fontWeight: "600",
                lineHeight: "1.2",
              }}
            >
              {t("Xidmətlər")}
            </Typography>
            <Link
              underline="none"
              sx={{
                cursor: "pointer",
                fontWeight: "400",
                fontSize: { md: "18px", xs: "14px" },
                lineHeight: { md: "120%", xs: "0" },
                color: "#de352f",
                border: { md: "1px solid #de352f", xs: "none" },
                borderRadius: "16px",
                padding: { md: "12px 32px", xs: "16px" },
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
              gridTemplateColumns: {
                md: "1fr 1fr 1fr 1fr",
                xs: "repeat(auto-fit,minmax(100px,1fr))",
              },
              gap: { md: "32px", xs: "8px" },
            }}
          >
            {servicesData.map((service) => {
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
