import { Box, CircularProgress } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";
import ThemeLayout from "./ThemeLayout";

const MainLayout = () => {
  // Scroll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeLayout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 !important",
        }}
      >
        <Header />
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
        >
          <Box
            sx={{
              flexGrow: 1,
              height: 1,
            }}
          >
            <Outlet />
          </Box>
        </Suspense>
        <Footer />
      </Box>
    </ThemeLayout>
  );
};

export default MainLayout;
