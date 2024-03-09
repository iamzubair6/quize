import slider1 from "@assets/banner01.jpg";
import slider2 from "@assets/banner02.jpg";
import playBtn from "@assets/logo.jpg";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  const [userNumber, setUserNumber] = useState(false);
  const cards = [
    {
      img: slider1,
    },
    {
      img: slider2,
    },
  ];
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden !important",
        "& .swiper-pagination-bullet": {
          display: "none",
        },
      }}
    >
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {cards?.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box
                component={"img"}
                src={item?.img}
                sx={{
                  objectFit: "cover",
                  height: "100vh",
                  width: "100vw",
                  position: "relative",
                }}
              />
              {userNumber === true ? (
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 9999999999,
                    bottom: 22,
                    right: 58,
                    bgcolor: "#262d4a",
                    borderRadius: "50%",
                    height: "300px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Box
                    component={"img"}
                    src={playBtn}
                    sx={{
                      height: "160px",
                      maxWidth: "160px",
                      objectFit: "fit",
                    }}
                  />
                  <TextField
                    variant="outlined"
                    placeholder="01XXXXXXXXX"
                    sx={{
                      width: 1,
                      maxWidth: "200px",
                      bgcolor: "white",
                      borderRadius: "5px",
                      "& .MuiInputBase-input": {
                        padding: "9px",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#1D1D1B",
                        },
                      },
                    }}
                  />
                  <Button
                    sx={{
                      mt: "10px",
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 600,
                      boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.25)",
                      backgroundColor: "#f15175",
                      "&:hover": {
                        backgroundColor: "#f15175E6",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              ) : (
                <Button
                  sx={{
                    position: "absolute",
                    zIndex: 9999999999,
                    bottom: 20,
                    right: 50,
                  }}
                  onClick={() => setUserNumber(true)}
                >
                  <Box
                    component={"img"}
                    src={playBtn}
                    sx={{
                      position: "relative",
                      borderRadius: "50%",
                      height: "300px",
                      maxWidth: "300px",
                      objectFit: "fit",
                    }}
                  />
                </Button>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Home;
