import React from "react";
import { Box, Typography, List, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const info = [
  "Təhlükəsizlik",
  "Aksiyalar",
  "Təcrübə proqramları",
  "Şirkət haqqında",
  "Ofis şəbəkəsi",
  "Tez-tez verilən suallar",
];

export const FooterMenuItems = ({ title, item, clickHandle }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box>
      <Typography
        sx={{ fontSize: "24px", fontWeight: "700", color: "#221f20" }}
      >
        {t(title)}
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {item.map((item) => {
          return (
            <Link
              key={item}
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
          );
        })}
      </List>
    </Box>
  );
};
