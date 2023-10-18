import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import mainLogo from "../images/main-logo.svg";
import callLogo from "../images/call-logo.svg";
import { useTranslation } from "react-i18next";

const pages = [
  "Bütün xidmətlər",
  "Terminal xəritəsi",
  "Bizimlə əlaqə",
  "Bizə qoşul",
];

export const Navbar = ({ clickHandle }) => {
  const [lang, setLang] = React.useState("");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        width: { md: "1168px", xs: "373px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: { md: "none", xs: "0 0 16px 16px" },
      }}
    >
      <Container
        maxWidth="true"
        z-index="20"
        sx={{
          borderRadius: "16px",
          maxWidth: "1300px",
        }}
      >
        <Toolbar>
          <img className="mainLogo" src={mainLogo} alt="Main Logo" />
          <Container
            maxWidth="true"
            sx={{
              maxWidth: "660px",
              marginLeft: "48px",
              display: { xs: "none", md: "block" },
            }}
          >
            {pages.map((page) => (
              <Button
                disableRipple
                key={page}
                variant="text"
                sx={{ marginRight: "20px", height: "15px" }}
                href="#"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#221f20",
                    textTransform: "none",
                    height: "15px",
                  }}
                >
                  {t(page)}
                </Typography>
              </Button>
            ))}
          </Container>
          <FormControl
            sx={{
              borderRadius: "10px",
              marginRight: "40px",
              boxShadow: "0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Select
              outlined="none"
              sx={{
                display: { xs: "none", md: "flex" },
                height: "48px",
                width: "48px",
                fontSize: "14px",
                p: "1px",
                color: "red",
                borderRadius: "10px",
                ".MuiOutlinedInput-notchedOutline ": {
                  border: 0,
                },
              }}
              inputProps={{ IconComponent: () => null }}
              value={lang}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem onClick={() => clickHandle("az")} value="">
                Az
              </MenuItem>
              <MenuItem onClick={() => clickHandle("en")} value={10}>
                En
              </MenuItem>
              <MenuItem onClick={() => clickHandle("ru")} value={20}>
                Ru
              </MenuItem>
            </Select>
          </FormControl>
          <Container
            sx={{
              width: "77px",
              display: { md: "flex", xs: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={callLogo} alt="Call Logo" />
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
