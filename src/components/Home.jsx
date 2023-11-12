import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Input,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import azerisiq from "../../public/images/azerisiq-logo.png";
import azerqaz from "../../public/images/azerqaz-logo.png";
import azersu from "../../public/images/azersu-logo.png";
import narmobile from "../../public/images/narmobile.png";
import bakcell from "../../public/images/bakcell.png";
import { useTranslation } from "react-i18next";

const logos = [azerisiq, azerqaz, azersu, narmobile, bakcell];

export const Home = ({ clickHandle }) => {
  const [value, setValue] = useState("+994");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [icon, setIcon] = useState(<VisibilityOutlinedIcon />);
  const [visible, setVisible] = useState(false);
  const changeIcon = () => {
    setVisible(!visible);
    setIcon(
      visible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />
    );
  };
  const { t, i18n } = useTranslation();

  return (
    <Box
      className="homeDiv"
      sx={{
        paddingTop: "80px",
        paddingBottom: "80px",
        height: "70vh",
        width: "100%",
        borderRadius: "0 0 32px 32px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1344px",
          height: "446px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "56px",
          paddingBottom: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container>
          <Box sx={{ marginBottom: "48px", height: "140px" }}>
            <Typography
              color="white"
              sx={{ fontSize: "48px", lineHeight: "1.2" }}
            >
              {t("Bütün xidmətlər")} <br /> {t("bir ödəmə nöqtəsində!")}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "66px",
              maxWidth: "480px",
              position: "relative",
              background: "white",
              padding: "24px",
              borderRadius: "24px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Input
              placeholder={t("Axtar")}
              disableUnderline={true}
              sx={{
                width: "390px",
                height: "20px",
                fontSize: "16px",
                fontWeight: "500",
                marginLeft: "10px",
                lineHeight: "100%",
              }}
            />
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.844"
                cy="6.844"
                stroke="#de352f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                r="5.992"
              ></circle>
              <path
                d="m11.012 11.323 2.35 2.344"
                stroke="#de352f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            {logos.map((logo) => (
              <Link
                underline="none"
                key={logo}
                sx={{ width: "64px", cursor: "pointer" }}
              >
                <img className="merchantLogos" src={logo} alt="" />{" "}
              </Link>
            ))}
          </Box>
        </Container>
        <Container
          sx={{
            display: { xs: "none", md: "block" },
            width: "410px",
            height: "334px",
            background: "rgba(255,255,255,.14)",
            backdropFilter: "blur(24px)",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <Typography
            color="white"
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              textTransform: "none",
              width: "346px",
            }}
          >
            {t("Daxil ol")}
          </Typography>
          <Container
            disableGutters
            sx={{
              maxWidth: "346px",
              height: "200px",
            }}
          >
            <Box
              sx={{
                background: "white",
                borderRadius: "16px",
                marginBottom: "18px",
                marginTop: "18px",
              }}
            >
              <Input
                disableUnderline={true}
                type="numeric"
                value={value}
                onChange={handleChange}
                sx={{ width: "346px", height: "50px", padding: "16px" }}
              />
            </Box>
            <Box
              sx={{
                background: "white",
                borderRadius: "16px",
                display: "flex",
              }}
            >
              <Input
                placeholder={t("Şifrə")}
                type={visible ? "text" : "password"}
                disableUnderline={true}
                sx={{ width: "346px", height: "50px", padding: "16px" }}
              />

              <IconButton
                onClick={() => changeIcon()}
                sx={{
                  color: "#9b9b9b!important",
                  borderRadius: "50%",
                  maxWidth: "22px",
                  height: "24px",
                  position: "absolute!important",
                  right: "0!important",
                  marginRight: "30px",
                  marginTop: "5px",
                  padding: "20px",
                }}
              >
                {icon}
              </IconButton>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  textTransform: "none",
                  borderRadius: "16px",
                  width: "120px",
                  height: "46px",
                  fontSize: "17px",
                }}
              >
                {t("Daxil ol")}
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  marginLeft: "8px",
                  borderRadius: "16px",
                  width: "120px",
                  height: "46px",
                  fontSize: "17px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                {t("Qeydiyyat")}
              </Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};
