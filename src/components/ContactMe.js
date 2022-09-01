import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
// import { Form } from "react-bootstrap";

export default function Message() {
  const isMobile = useMediaQuery("(max-width:900px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("done");
    console.log(data);
  };

  return (
    <div>
      <div id="contact-me">
        <Paper
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              minWidth: isMobile ? "100%" : "40ch",
            },
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            m: 8,
          }}
        >
          <Stack
            component="form"
            sx={{
              p: 5,
              m: 8,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={2}>
              <Typography component="h1" variant="h4" align="center">
                Contact Me
              </Typography>

              <Divider />

              <TextField
                required
                error={!!errors.name}
                label="Name"
                variant="outlined"
                {...register("name", {
                  required: true,
                })}
                helperText={
                  !!errors.name ? "Please enter your first name." : ""
                }
              />

              <TextField
                required
                label="Email"
                variant="outlined"
                error
                helperText="Please enter your email address."
              />

              <TextField
                required
                label="Message"
                variant="outlined"
                error
                helperText="Please enter message"
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "blue" }}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </div>
  );
}
