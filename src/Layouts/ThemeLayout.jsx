import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const ThemeLayout = ({ children }) => {
  const { breakpoints } = createTheme();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#262d4a",
      },
      secondary: {
        main: "#F5F5F5",
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
      fontFamily: ["Montserrat Variable", "Poppins", "sans-serif"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            //Set core body defaults
            padding: 0,
            minHeight: "100vh",
            textRendering: "optimizeSpeed",
            //for non mui componet
            "*": {
              fontFamily: ["Montserrat Variable", "sans-serif"].join(","),
              fontWeight: 400,
            },

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
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: "34px",
            [breakpoints.down("md")]: {
              fontSize: "24px",
              lineHeight: "41px",
            },
            lineHeight: "51px",
            color: "#1D1D1B",
          },
          h2: {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "22px",
            [breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "27px",
            },
            lineHeight: "33px",
            color: "#1D1D1B",
          },
          h3: {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            [breakpoints.down("md")]: {
              fontSize: "16px",
              lineHeight: "22px",
            },
            lineHeight: "27px",
            color: "#1D1D1B",
          },
          h4: {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "23px",
            color: "#1D1D1B",
          },
          h5: {
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "26px",
          },
          body2: {
            fontFamily: "Montserrat Variable",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "51px",
            color: "#999",
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "buttonOne" },
            style: {
              textTransform: "none",
              color: "#0B0B0B",
              fontSize: "16px",
              fontWeight: 600,
              boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#f15175",
              "&:hover": {
                backgroundColor: "#f15175E6",
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
