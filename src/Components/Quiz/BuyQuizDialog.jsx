import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const BuyQuizDialog = ({
  open = false,
  //   deleteURL = "",
  handleClose = () => null,
  //   successRefetch = () => null,
}) => {
  //   const { mutate: deleteMutation, isLoading } = useMutation(
  //     () => axiosApi.delete(deleteURL),
  //     {
  //       onSuccess: () => {
  //         successRefetch();
  //         handleClose();
  //       },
  //       onError: (e) => {
  //         alert("failed");
  //       },
  //     }
  //   );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        component="div"
        id="alert-dialog-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ShoppingCartIcon />
          <Typography variant="h5">Buy Quiz Package</Typography>
        </Box>
        <IconButton
          onClick={() => handleClose()}
          sx={{
            bgcolor: "textGray",
            height: "24px",
            width: "24px",
            borderRadius: "5px",
            "&:hover": {
              bgcolor: "lightGray",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          minHeight: "60px",
          minWidth: "500px",
        }}
      >
        <DialogContentText id="alert-dialog-description">
          Choose Payment Method
        </DialogContentText>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value=",fs" control={<Radio />} label="MFS" />
            <FormControlLabel value="telco" control={<Radio />} label="TELCO" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ mb: "20px", gap: "16px", pr: "24px" }}>
        <Button
          variant="contained"
          onClick={() => handleClose()}
          sx={{
            color: "black",
            borderRadius: "6px",
            bgcolor: "rgba(168, 170, 174, 0.16)",
            "&:hover": {
              bgcolor: "rgba(168, 170, 174, 0.16)",
            },
          }}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          //   loading={isLoading}
          //   onClick={deleteMutation}
          autoFocus
          sx={{
            color: "textWhite",
            borderRadius: "6px",
            bgcolor: "#EA5046",
            "&:hover": {
              bgcolor: "#EA5046",
            },
          }}
        >
          Confirm
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default BuyQuizDialog;
