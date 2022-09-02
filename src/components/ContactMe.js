import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import { Button } from "@mui/material";

export default function Message({ isMobile }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Paper sx={{ p: 3, minWidth: isMobile ? "90%" : "400px" }} elevation={6}>
      <Typography component="h1" variant="h4" align="center">
        Login
      </Typography>
      <Divider />
      <Stack
        component="form"
        sx={{ p: 3 }}
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <TextField
            error={!!errors.email}
            label="Name"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid name." : ""}
            {...register("mame", {
              required: true,
            })}
          />
        </Stack>
        <Stack spacing={2}>
          <TextField
            error={!!errors.email}
            label="Email"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid email." : ""}
            {...register("email", {
              required: true,
            })}
          />
        </Stack>
        <Stack spacing={2}>
          <TextField
            error={!!errors.email}
            label="Message"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid message." : ""}
            {...register("message", {
              required: true,
            })}
          />
        </Stack>
        <Stack spacing={2}>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
