import React from "react";
import { Box, Typography, List, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import callFooterLogo from "../../public/images/millioncallfooter.svg";

const info = [
  "Təhlükəsizlik",
  "Aksiyalar",
  "Təcrübə proqramları",
  "Şirkət haqqında",
  "Ofis şəbəkəsi",
  "Tez-tez verilən suallar",
];

export const FooterMenuItems = ({ title, item, image, clickHandle }) => {
  const { t, i18n } = useTranslation();
  return (
    <List
      sx={{
        width: "150px",
        lineHeight: "35px",
        "&::after": {
          content: `""`,
          width: "25px",
          backgroundColor: "#de352f",
          height: "3px",
          borderRadius: "2px",
          position: "absolute",
          marginTop: "-15px",
        },
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: "700", color: "#221f20" }}
      >
        {t(title)}
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {item.map((item) => {
          return (
            <Box key={item}>
              {image === true ? (
                <Box sx={{ display: { md: "none" }, marginBottom: "-20px" }}>
                  <img src={callFooterLogo} />
                </Box>
              ) : (
                ""
              )}
              <Link
                underline="none"
                sx={{
                  fontSize: "14px",
                  color: "rgba(34,31,32,.5)",
                  borderLeft: "2px solid transparent",
                  transition: "all .5s",
                  cursor: "pointer",
                  marginBottom: "16px",
                  "&:hover": { color: "#221f20" },
                }}
              >
                {t(item)}
              </Link>
            </Box>
          );
        })}
      </List>
    </List>
  );
};
