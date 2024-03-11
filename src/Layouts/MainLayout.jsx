import SideDrawer from "@/Components/Shared/SideDrawer";
import { Box, CircularProgress, Container } from "@mui/material";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ThemeLayout from "./ThemeLayout";

const MainLayout = () => {
  // Scroll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeLayout>
      <Container
        maxWidth="xxl"
        sx={{
          padding: { xs: "0px", md: "30px" },
          display: "flex",
          flexDirection: { xs: "column", md: "unset" },
        }}
      >
        <SideDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "primary.main",
                }}
              >
                <CircularProgress sx={{ color: "white" }} />
              </Box>
            }
          />
          <Box
            sx={{
              flexGrow: 1,
              height: 1,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Container>
    </ThemeLayout>
  );
};

export default MainLayout;
