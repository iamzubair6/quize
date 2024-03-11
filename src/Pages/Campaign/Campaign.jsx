import tv from "@assets/tv.png";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Campaign = () => {
  return (
    <Box>
      {" "}
      <Typography variant="h2" textAlign={"center"} sx={{ pb: "30px" }}>
        CAMPAIGN
      </Typography>
      <Grid container columnSpacing={"15px"} rowSpacing={"15px"}>
        {new Array(4).fill(0).map((_, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={idx}>
              <Paper
                sx={{
                  p: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  component={"img"}
                  src={tv}
                  alt={"pic"}
                  sx={{ width: 1, height: "auto" }}
                />
                <Typography variant="body8" color={"black"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores non, quo explicabo itaque.
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Campaign;
