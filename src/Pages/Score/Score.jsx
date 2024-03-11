import ScoreCard from "@/Components/Score/ScoreCard";
import { Box, Button, Typography } from "@mui/material";

const Score = () => {
  return (
    <Box>
      <Typography variant="h2" textAlign={"center"} sx={{ pb: "30px" }}>
        SCORE
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="body4">Your total point is 20</Typography>
        <Typography variant="body8">
          You can buy any giftPack by using your point
        </Typography>
        <Button variant="contained" sx={{ p: "10px" }}>
          Gift Pack
        </Button>
        <ScoreCard />
      </Box>
    </Box>
  );
};

export default Score;
