import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schema/";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Select,
  FormControl,
  MenuItem,
  Box,
  Input,
  IconButton,
  Drawer,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import mainLogo from "../images/main-logo.svg";
import callLogo from "../images/call-logo.svg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import azerisiq from "../images/azerisiq-logo.png";
import azerqaz from "../images/azerqaz-logo.png";
import azersu from "../images/azersu-logo.png";
import narmobile from "../images/narmobile.png";
import azercell from "../images/azercellLogo.png";
import mastercardLogo from "../images/mastercard-logo.png";
import visaLogo from "../images/visa-logo.png";
import millioncallLogo from "../images/millioncall-footer.png";
import { useTranslation } from "react-i18next";

const pages = [
  "Bütün xidmətlər",
  "Terminal xəritəsi",
  "Bizimlə əlaqə",
  "Bizə qoşul",
];

const logos = [azersu, azerqaz, azerisiq, narmobile, azercell];

export const Navbar = ({ clickHandle }) => {
  const [lang, setLang] = useState("");
  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };
  // const [value, setValue] = useState("");
  // const handleValue = (event) => {
  //   setValue(event.target.value);
  // };
  const [icon, setIcon] = useState(<VisibilityOutlinedIcon />);
  const [visible, setVisible] = useState(false);
  const changeIcon = () => {
    setVisible(!visible);
    setIcon(
      visible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />
    );
  };

  const [drawer, setDrawer] = useState(false);

  const sidebarItems = [
    "Əsas səhifə",
    "Bütün xidmətlər",
    "Terminal xəritəsi",
    "Xəbərlər",
    "Şirkət haqqında",
    "Bizə qoşul",
  ];
  const [sidebarItemsId, setsidebarItemsId] = useState(null);

  function toggleButton(item) {
    setsidebarItemsId(sidebarItems.id);
  }

  const onSubmit = () => {};

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const { t, i18n } = useTranslation();

  return (
    <Box
      className="section"
      sx={{
        borderRadius: { md: "0 0 32px 32px", xs: "0 0 18px 18px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: { md: "white", xs: "none" },
          width: { md: "100%", xs: "100%" },
        }}
      >
        <AppBar
          position="relative"
          color="inherit"
          elevation={0}
          sx={{
            width: { md: "100%", xs: "100%" },
            height: { md: "auto", xs: "" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: { md: "none", xs: "0 0 16px 16px" },
          }}
        >
          <Container
            disableGutters
            maxWidth="true"
            z-index="20"
            sx={{
              borderRadius: "16px",
              maxWidth: "1200px",
            }}
          >
            <Toolbar
              sx={{
                padding: { md: "16px", xs: "none" },

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  display: { md: "none", xs: "block" },
                  color: "white",
                  backgroundColor: "#de352f",
                  width: "60px",
                  height: "34px",
                  borderRadius: "14px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#de352f",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    textTransform: "none",
                  }}
                >
                  {t("Daxil ol")}
                </Typography>
              </Button>
              <img className="mainLogo" src={mainLogo} alt="Main Logo" />
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  display: { md: "none", xs: "flex" },
                  alignItems: "center",
                  border: "2px solid #f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <MenuIcon
                  onClick={() => setDrawer(true)}
                  sx={{
                    display: { md: "none", xs: "flex" },
                    color: "red",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <Drawer open={drawer} anchor="right">
                  <Box className="sidebar" sx={{ width: "100%" }}>
                    <Box className="sidebarHeader" sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          width: "100vw",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "16px 24px",
                        }}
                      >
                        <Box sx={{ marginTop: "10px" }}>
                          <img src={mainLogo} alt="MilliOn Logo" />
                        </Box>
                        <IconButton
                          onClick={() => setDrawer(false)}
                          sx={{
                            width: "34px",
                            height: "34px",
                            marginLeft: "auto",
                            color: "red",
                            border: "2px solid #f5f5f5",
                            borderRadius: "8px",
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      className="sidebarBody"
                      sx={{ padding: "0px 24px 85px 24px" }}
                    >
                      <Box
                        className="sidebarLanguage"
                        sx={{
                          display: "flex",
                          gap: "0px",
                          marginBottom: "16px",
                        }}
                      >
                        <Stack direction="row" spacing={1}>
                          <Box
                            component="button"
                            id="az"
                            onClick={() => clickHandle("az")}
                            value=""
                            sx={{
                              border: "none",
                              width: "40px",
                              height: "40px",
                              fontSize: "14px",
                              fontWeight: "500",
                              borderRadius: "16px",
                              backgroundColor: "#fff",
                              color: "#000",
                              "&:focus": {
                                backgroundColor: "#de352f",
                                color: "#fff",
                              },
                            }}
                          >
                            AZ
                          </Box>
                          <Box
                            component="button"
                            onClick={() => clickHandle("en")}
                            value="10"
                            sx={{
                              border: "none",
                              width: "40px",
                              height: "40px",
                              fontSize: "14px",
                              fontWeight: "500",
                              borderRadius: "16px",
                              backgroundColor: "#fff",
                              color: "#000",
                              "&:focus": {
                                backgroundColor: "#de352f",
                                color: "#fff",
                              },
                            }}
                          >
                            EN
                          </Box>
                          <Box
                            component="button"
                            onClick={() => clickHandle("ru")}
                            value="20"
                            sx={{
                              border: "none",
                              width: "40px",
                              height: "40px",
                              fontSize: "14px",
                              fontWeight: "500",
                              borderRadius: "16px",
                              backgroundColor: "#fff",
                              color: "#000",
                              "&:focus": {
                                backgroundColor: "#de352f",
                                color: "#fff",
                              },
                            }}
                          >
                            RU
                          </Box>
                        </Stack>
                      </Box>
                      <Divider
                        elevation={0}
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "4px",
                          background: "#e8e8e8",
                          borderRadius: "16px",
                          marginBottom: "16px",
                          borderBottomWidth: "0",
                        }}
                      />
                      <Box
                        className="sidebarScroll"
                        sx={{ width: "100%", overflow: "auto" }}
                      >
                        <Box>
                          {sidebarItems.map((item) => {
                            const isToggled = item.id === sidebarItemsId;
                            return (
                              <Box
                                key={item}
                                className={
                                  isToggled
                                    ? "sidebarItemsId toggled"
                                    : "sidebarItemsId"
                                }
                                onClick={() => toggleButton(item)}
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "16px",
                                  background: "#f5f5f5",
                                  borderRadius: "16px",
                                  padding: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                <Link
                                  underline="none"
                                  sx={{
                                    fontSize: "16px",
                                    lineHeight: "127%",
                                    color: "#221f20",
                                  }}
                                >
                                  {t(item)}
                                </Link>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      className="sidebarFooter"
                      sx={{
                        width: "100%",
                        marginTop: "auto",
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        background: "#fff",
                        padding: "16px 24px",
                      }}
                    >
                      <Box className="sidebarButtons">
                        <Box
                          sx={{
                            display: "flex",
                            gap: "8px",
                            marginBottom: "20px",
                          }}
                        >
                          <Button
                            sx={{
                              width: "100%",
                              padding: "16px",
                              background: "#de352f",
                              border: "1px solid #de352f",
                              borderRadius: "16px",
                              color: "#fff",
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textTransform: "capitalize",
                              fontSize: "15px",
                            }}
                          >
                            {t("Daxil ol")}
                          </Button>
                          <Button
                            sx={{
                              width: "100%",
                              padding: "16px",
                              background: "#000",
                              border: "1px solid #000",
                              borderRadius: "16px",
                              color: "#fff",
                              textAlign: "center",
                              textTransform: "capitalize",
                              fontSize: "15px",
                            }}
                          >
                            {t("Tətbiqi yüklə")}
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        className="sidebarFooterCopyright"
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          className="sidebarFooterInfo"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: "1",
                          }}
                        >
                          <Box className="sidebarFooterLogos">
                            <img src={visaLogo} alt="Visa" />
                            <img
                              src={mastercardLogo}
                              alt="MasterCard"
                              style={{ marginLeft: "16px" }}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: ".625rem",
                              color: "#221f20",
                              opacity: ".6",
                            }}
                          >
                            {t("Bütün hüquqlar qorunur")} © 2023{" "}
                            <strong>MilliÖn</strong>
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: ".625rem",
                              color: "#221f20",
                              opacity: ".6",
                            }}
                          >
                            Developed by <strong>Crocusoft</strong>
                          </Typography>
                        </Box>
                        <Box
                          className="sidebarFooterCall"
                          sx={{
                            width: "46px",
                            height: "100%",
                            flexShrink: "0",
                          }}
                        >
                          <img src={millioncallLogo} alt="MilliOn Call" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Drawer>
              </Box>
              <Container
                maxWidth="true"
                sx={{
                  maxWidth: "max-content",
                  marginLeft: "48px",
                  display: { xs: "none", md: "flex" },
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
              <Box sx={{ display: { md: "flex", xs: "none" } }}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "none" },
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
                        border: "none",
                      },
                    }}
                    inputProps={{ IconComponent: () => null }}
                    value={lang}
                    onChange={handleChangeLang}
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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box
        className="homeDiv"
        sx={{
          padding: { md: "80px 0 80px 0 ", xs: "50px 10px" },
          height: { md: "70vh", xs: "100%" },
          width: "100%",
          borderRadius: "0 0 32px 32px",
        }}
      >
        <Box
          sx={{
            width: { md: "100%", xs: "100%" },
            maxWidth: "1240px",
            height: { md: "446px", xs: "100%" },
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: { md: "56px", xs: "0" },
            paddingBottom: { md: "56px", xs: "0" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Container disableGutters>
            <Box
              sx={{
                marginBottom: { md: "48px", xs: "22px" },
              }}
            >
              <Typography
                color="white"
                sx={{
                  fontSize: { md: "48px", xs: "24px" },
                  lineHeight: { md: "1.2", xs: "1.4" },
                  textAlign: { md: "left", xs: "center" },
                  fontWeight: { md: "510", xs: "700" },
                  paddingTop: { md: "none", xs: "none" },
                }}
              >
                {t("Bütün xidmətlər")} <br /> {t("bir ödəmə nöqtəsində!")}
              </Typography>
            </Box>
            <Box
              sx={{
                height: { md: "66px", xs: "55px" },
                maxWidth: { md: "480px", xs: "100%" },
                position: "relative",
                background: "white",
                padding: "24px",
                borderRadius: "24px",
                gap: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "none", xs: "center" },
                overflow: "hidden",
              }}
            >
              <Input
                placeholder={t("Axtar")}
                disableUnderline={true}
                sx={{
                  width: { md: "390px", xs: "100%" },
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
            <Container
              disableGutters
              sx={{
                marginTop: "40px",
                display: "flex",

                justifyContent: { md: "left", xs: "space-between" },
              }}
            >
              {logos.map((logo) => (
                <Box
                  underline="none"
                  key={logo}
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    width: { md: "64px", xs: "60px" },
                    height: { md: "64px", xs: "60px" },
                    cursor: "pointer",
                    marginRight: { md: "20px", xs: "none" },
                    m: 0,
                  }}
                >
                  <img className="merchantLogos" src={logo} alt="" />
                </Box>
              ))}
            </Container>
          </Container>
          <Container
            sx={{
              display: { xs: "none", md: "block" },
              width: "410px",
              height: "auto",
              background: "rgba(255,255,255,.14)",
              backdropFilter: "blur(24px)",
              borderRadius: "24px",
              padding: "32px",
              flexShrink: "0",
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
            <Box
              sx={{
                maxWidth: "346px",
                height: "200px",
                display: "inline-block",
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
                  className={errors.phoneNumber ? "input-error" : ""}
                  disableUnderline={true}
                  type="number"
                  value={values.phoneNumber}
                  id="phoneNumber"
                  onChange={handleChange}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 9);
                  }}
                  sx={{
                    width: "346px",
                    height: "50px",
                    padding: "16px",
                    "&:before": {
                      content: `"+994"`,
                      paddingRight: "5px",
                      marginBottom: "2px",
                    },
                  }}
                />
              </Box>
              {errors.phoneNumber && (
                <Box
                  className="error"
                  sx={{
                    width: "96%",
                    color: "#d32f2f",
                    fontSize: ".9rem",
                    fontWeight: "400",
                    marginTop: "-10px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    marginLeft: "7px",
                  }}
                >
                  <p>{errors.phoneNumber}</p>
                </Box>
              )}

              <Box
                sx={{
                  background: "white",
                  borderRadius: "16px",
                  display: "flex",
                }}
              >
                <Input
                  className={errors.password ? "input-error" : ""}
                  placeholder={t("Şifrə")}
                  value={values.password}
                  id="password"
                  onChange={handleChange}
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
                    marginRight: "50px",
                    marginTop: "5px",
                    padding: "20px",
                  }}
                >
                  {icon}
                </IconButton>
              </Box>
              {errors.password && (
                <Box
                  className="error"
                  sx={{
                    width: "96%",
                    color: "#d32f2f",
                    fontSize: ".9rem",
                    fontWeight: "400",
                    marginTop: "5px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    marginLeft: "7px",
                  }}
                >
                  <p>{errors.password}</p>
                </Box>
              )}
              <Box sx={{ marginTop: "25px" }}>
                <Button
                  onSubmit={handleSubmit}
                  type="submit"
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
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
