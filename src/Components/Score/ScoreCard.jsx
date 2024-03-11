import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import GiftPackOrderDialog from "./GiftPackOrderDialog";

const ScoreCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      columnSpacing={"15px"}
      rowSpacing={"15px"}
      sx={{ mt: "20px" }}
    >
      {[
        "60Tk Talk Time + 1GB Data (7 Day)",
        "Speakers",
        "Gif Voucher / Amusement Pass",
        "Gift Voucher (Arong)",
      ].map((item, idx) => {
        return (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={4}>
            <Paper
              sx={{
                p: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="body2" sx={{ color: "black" }}>
                {item}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body6"
                  sx={{
                    color: "black",
                    fontWeight: 600,
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <FaDatabase />
                  100
                </Typography>
                <Divider sx={{ borderColor: "black" }} />
              </Box>
              <Button
                variant="buttonOne"
                fullWidth
                onClick={() => setOpen(true)}
              >
                ORDER NOW
              </Button>
            </Paper>
          </Grid>
        );
      })}
      <GiftPackOrderDialog open={open} handleClose={() => setOpen(false)} />
    </Grid>
  );
};

export default ScoreCard;
