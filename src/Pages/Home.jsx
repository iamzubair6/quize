import slider1 from "@assets/banner01.jpg";
import slider2 from "@assets/banner02.jpg";
import playBtn from "@assets/logo.jpg";
import { Box, Button } from "@mui/material";
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
              <Button
                sx={{
                  position: "absolute",
                  zIndex: 9999999999,
                  bottom: 20,
                  right: 50,
                }}
              >
                <Box
                  component={"img"}
                  src={playBtn}
                  sx={{
                    borderRadius: "50%",
                    height: "300px",
                    maxWidth: "300px",
                    objectFit: "fit",
                  }}
                />
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Home;
