import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@mui/material";

import { Button } from "@mui/material";

export default function Message({}) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div id="contact-me">
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          p: 3,
          m: 8,
        }}
      >
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
    </div>
  );
}
