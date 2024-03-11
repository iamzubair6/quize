import BuyQuizDialog from "@/Components/Quiz/BuyQuizDialog";
import InventoryIcon from "@mui/icons-material/Inventory";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { TbCoinTakaFilled } from "react-icons/tb";

const BuyQuiz = () => {
  const [open, setOpen] = useState(false);
  const packages = [
    { packageName: "Silver", numQuizzes: 10, price: 10 },
    { packageName: "Bronze", numQuizzes: 25, price: 35 },
    { packageName: "Golden", numQuizzes: 50, price: 55 },
    { packageName: "Platinum", numQuizzes: 100, price: 75 },
  ];
  return (
    <Grid container columnSpacing={"15px"} rowSpacing={"15px"}>
      {packages.map((item, idx) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={idx}>
            <Paper
              sx={{
                p: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  p: "5px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <InventoryIcon sx={{ fontSize: "20px" }} /> PACKAGE NAME:{" "}
                {item?.packageName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  p: "5px",
                  color: "black",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <QuizIcon sx={{ fontSize: "20px" }} /> NUMBER QUIZZES:{" "}
                {item?.numQuizzes}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  p: "5px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <TbCoinTakaFilled style={{ fontSize: "20px" }} />
                PRICE: {item?.price} BDT
              </Typography>
              <Button
                variant="buttonOne"
                fullWidth
                onClick={() => setOpen(true)}
              >
                BUY NOW
              </Button>
            </Paper>
          </Grid>
        );
      })}
      <BuyQuizDialog open={open} handleClose={() => setOpen(false)} />
    </Grid>
  );
};

export default BuyQuiz;
