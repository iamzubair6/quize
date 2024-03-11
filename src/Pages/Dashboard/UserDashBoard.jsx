import BuyQuiz from "@/Pages/BuyQuiz/BuyQuiz";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Box, Typography } from "@mui/material";
import Score from "@pages/Score/Score";
import { useNavigate } from "react-router-dom";
import Campaign from "../Campaign/Campaign";

const UserDashBoard = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: "30px",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "primary.main",
          height: "340px",
          width: 1,
          maxWidth: { xs: "350px", md: "430px" },
          borderRadius: "10px",
          border: "3px solid #EF5073",
        }}
        onClick={() => navigate("/dashboard/play")}
      >
        <SportsEsportsIcon sx={{ color: "#EF5073", fontSize: "100px" }} />
        <Typography variant="h2" color={"white"}>
          PLAY QUIZ
        </Typography>
      </Box>
      <Typography variant="h2" textAlign={"center"}>
        Buy Quiz Packages
      </Typography>
      <BuyQuiz />
      <Score />
      <Campaign />
    </Box>
  );
};

export default UserDashBoard;
