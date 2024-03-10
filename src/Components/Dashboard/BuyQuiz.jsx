import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const BuyQuiz = () => {
  const packages = [
    { packageName: "Silver", numQuizzes: 10, price: 10 },
    { packageName: "Bronze", numQuizzes: 25, price: 35 },
    { packageName: "Golden", numQuizzes: 50, price: 55 },
    { packageName: "Platinum", numQuizzes: 100, price: 75 },
  ];
  return (
    <Box>
      <Typography variant="h2" textAlign={"center"} sx={{ pb: "30px" }}>
        Buy Quiz Packages
      </Typography>
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
                <Button variant="buttonOne" fullWidth>
                  BUY NOW
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BuyQuiz;
