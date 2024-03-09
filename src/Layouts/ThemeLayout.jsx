import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

const ThemeLayout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#03062E",
      },
      secondary: {
        main: "#1F2353",
      },
      accent: {
        main: "#E8A125",
      },
      formText: {
        main: "#ABA4A4",
      },
      info: {
        main: "#FBFAFA",
      },
      black2: {
        main: "#0B0B0B",
      },
      textHeadingWhite: "#F8F8F8",
      textBodyWhite: "#C8C8C8",
      textHeadingBlack: "#03062E",
      textBodyBlack: "#5E5E5E",
    },
    typography: {
      fontFamily: ["DM Sans", "Lato", "sans-serif"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            //Set core body defaults
            padding: 0,
            minHeight: "100vh",
            textRendering: "optimizeSpeed",

            // Box sizing rules
            "*,*::before,*::after": {
              boxSizing: "border-box",
            },
            // Set core root defaults
            "& html:focus-within": { scrollBehavior: "smooth" },
            "h1,h2,h3,h4,h5,h6,p": {
              margin: "0 !important",
            },

            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              background: "#e0e0e0",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              background: "#03062E",
            },
            "&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover":
              {
                background: "#e0e0e0",
              },
            "&::-selection, & *::-selection": {
              backgroundColor: "gray",
            },

            // Remove all animations, transitions and smooth scroll for people that prefer not to see them
            ["@media (prefers-reduced-motion: reduce)"]: {
              "& html:focus-within": {
                scrollBehavior: "auto",
              },
              "*,*::before,*::after": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },

            // others
            "& a": {
              textDecoration: "unset !important",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "72px",
            lineHeight: "62px",
          },
          h2: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "54px",
            lineHeight: "53px",
          },
          h3: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "44px",
          },
          h4: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "28px",
            lineHeight: "35px",
          },
          h5: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "26px",
          },
          body2: {
            fontFamily: "DM Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "themed" },
            style: {
              textTransform: "none",
              color: "#0B0B0B",
              fontSize: "16px",
              fontWeight: 700,
              boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#E8A125",
              "&:hover": {
                backgroundColor: "#E8A125E6",
              },
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
