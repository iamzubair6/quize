import logo from "@assets/logo.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MenuIcon from "@mui/icons-material/Menu";
import RedeemIcon from "@mui/icons-material/Redeem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerMenus = [
  {
    title: "Subscription",
    icon: LoyaltyIcon,
    path: "subscription",
  },
  {
    title: "Score",
    icon: JoinInnerIcon,
    path: "score",
  },

  {
    title: "Quize History",
    icon: HistoryToggleOffIcon,
    path: "history",
  },
  {
    title: "Redeem History",
    icon: RedeemIcon,
    path: "redeem",
  },
  //   {
  //     title: "Title 1",
  //     icon: LuLayoutDashboard,
  //     path: "title",
  //     children: [
  //       {
  //         title: "sub title",
  //         path: "",
  //       },
  //       {
  //         title: "sub title one",
  //         path: "subone",
  //       },

  //     ],
  //   },
];

const SideDrawer = () => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const drawerWidth = "290px";
  const [isMobileView, setIsMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control drawer open/close

  const handleExpandedMenu = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const handleMenu = (path) => {
    setExpanded(null);
    navigate(path);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateIsMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // You can adjust the breakpoint as needed
    };
    window.addEventListener("resize", updateIsMobileView);

    updateIsMobileView();

    const pathNames = pathname?.split("/");
    const parentNav = pathNames[1] ?? "";
    if (Boolean(parentNav)) {
      drawerMenus?.forEach((item, index) => {
        if (Boolean(item?.path === parentNav)) {
          setExpanded(`panel${index}`);
        }
      });
    }
    return () => window.removeEventListener("resize", updateIsMobileView);
  }, []);

  return (
    <>
      {isMobileView ? (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            color: "red",
            position: "absolute",
            top: -10,
            left: 0,
          }}
        >
          <MenuIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      ) : null}
      <Drawer
        anchor="left"
        variant={isMobileView ? "temporary" : "permanent"}
        open={isOpen} // Open drawer only when isOpen is true
        onClose={toggleDrawer}
        sx={{
          zIndex: 1000,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            bgcolor: "primary.main",
            color: "white",
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& svg": {
            color: "white",
          },
          // scrollbar
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "3px",
          },
        }}
      >
        <Toolbar>
          <Box
            component={"img"}
            src={logo}
            alt=""
            sx={{ height: "120px", width: 1, objectFit: "fit" }}
          />
        </Toolbar>
        <Box
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxHeight: "calc(100vh - 75px)",
            overflowY: "auto",

            // child styles
            "& .MuiButtonBase-root": {
              p: "0px 12px !important",
              fontSize: "14px",
              gap: "12px",
              height: "42px",
              borderRadius: "2px",
              justifyContent: "flex-start",
            },
            "& .MuiPaper-root": {
              color: "inherit",
              bgcolor: "inherit",
            },
            "& .MuiAccordionSummary-root": {
              minHeight: "unset !important",
              gap: "12px",

              "& .MuiAccordionSummary-content": {
                gap: "12px",
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                transform: "rotate(270deg)",
              },
              "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
                transform: "rotate(0deg)",
              },
            },
            "& .MuiAccordionDetails-root": {
              padding: "5px 0 0 2px !important",
            },
          }}
        >
          {/* <Typography variant="body1" sx={{ mb: "20px" }}>
            PLAY AND WIN
          </Typography> */}
          {drawerMenus?.map(
            ({ title, icon: Icon, path = "", children = "" }, idx) => {
              return (
                <Box key={`drawer-menu-${idx}`}>
                  {Boolean(children?.length) ? (
                    <Accordion
                      expanded={expanded === `panel${idx}`}
                      onChange={handleExpandedMenu(`panel${idx}`)}
                      elevation={0}
                    >
                      <AccordionSummary
                        aria-controls={`panel${idx}d-content`}
                        id={`panel${idx}d-header`}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Icon style={{ fontSize: "18px" }} />
                        <Box component="span">{title}</Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {children.map(
                          ({ title: childTitle, path: childPath }, idx) => {
                            return (
                              <Button
                                key={`drawer-sub-menu-${idx}`}
                                size="small"
                                onClick={() =>
                                  navigate(
                                    `/${path}${
                                      childPath ? `/${childPath}` : ""
                                    }`
                                  )
                                }
                                fullWidth
                                variant="text"
                                sx={{
                                  bgcolor: Boolean(
                                    `/${path}${
                                      childPath ? `/${childPath}` : ""
                                    }` === pathname
                                  )
                                    ? "white"
                                    : "transparent",
                                  color: Boolean(
                                    `/${path}${
                                      childPath ? `/${childPath}` : ""
                                    }` === pathname
                                  )
                                    ? "black"
                                    : "white",
                                  "& path": {
                                    color: Boolean(
                                      `/${path}${
                                        childPath ? `/${childPath}` : ""
                                      }` === pathname
                                    )
                                      ? "black"
                                      : "white",
                                  },

                                  "&:hover": {
                                    bgcolor: "white",
                                    color: "black",
                                    "& path": {
                                      color: "black",
                                    },
                                  },
                                }}
                              >
                                <CircleIcon
                                  sx={{
                                    height: "8px",
                                    width: "8px",
                                    ml: "7px",
                                    mr: "3px",
                                  }}
                                />
                                <Box component="span">{childTitle}</Box>
                              </Button>
                            );
                          }
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Button
                      fullWidth
                      variant="text"
                      onClick={() => handleMenu(`/${path}`)}
                      sx={{
                        bgcolor: Boolean(`/${path}` === pathname)
                          ? "white"
                          : "transparent",
                        color: Boolean(`/${path}` === pathname)
                          ? "black"
                          : "white",
                        "& path": {
                          color: Boolean(`/${path}` === pathname)
                            ? "black"
                            : "white",
                        },

                        "&:hover": {
                          bgcolor: "white",
                          color: "black",
                          "& path": {
                            color: "black",
                          },
                        },
                      }}
                    >
                      <Icon
                        style={{
                          fontSize: "18px",
                        }}
                      />
                      <Box component="span">{title}</Box>
                    </Button>
                  )}
                </Box>
              );
            }
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
