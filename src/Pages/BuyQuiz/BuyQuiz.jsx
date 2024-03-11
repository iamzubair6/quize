import BuyQuizDialog from "@/Components/Quiz/BuyQuizDialog";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

const BuyQuiz = () => {
  const [open, setOpen] = useState(false);
  const packages = [
    { packageName: "Silver", numQuizzes: 10, price: 10 },
    { packageName: "Bronze", numQuizzes: 25, price: 35 },
    { packageName: "Golden", numQuizzes: 50, price: 55 },
    { packageName: "Platinum", numQuizzes: 100, price: 75 },
  ];
  return (
    <Grid container columnSpacing={"15px"} rowGap={"15px"}>
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
                  bgcolor: "textBodyGray",
                  p: "5px",
                }}
              >
                PACKAGE NAME: {item?.packageName}
              </Typography>
              <Typography variant="body2" sx={{ p: "5px", color: "black" }}>
                NUMBER QUIZZES: {item?.numQuizzes}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  bgcolor: "textBodyGray",
                  p: "5px",
                }}
              >
                PRICE: {item?.price} USD
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
      <BuyQuizDialog
        open={open}
        setOpen={setOpen}
        handleClose={() => setOpen(false)}
      />
    </Grid>
  );
};

export default BuyQuiz;
