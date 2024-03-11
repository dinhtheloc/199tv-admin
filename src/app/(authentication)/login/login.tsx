// "use client";

import { login } from "@/libs/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { deleteCookie, getCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Login() {
//   const router = useRouter();
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");

  const getRedirect = () => {
    const redirect = getCookie("redirect");
    if (redirect) {
      deleteCookie("redirect");
      return redirect.toString();
    }

    return "/";
  };

  //   const login = async (e: SyntheticEvent) => {
  //     e.stopPropagation();
  //     e.preventDefault();

  //     setSubmitting(true);

  //     try {
  //     //   const res = await axios.post("api/mock/login");
  //       if (true) {
  //         router.push(getRedirect());
  //       }
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   };
  return (
    <Box
      action={async (formData) => {
        "use server";
        await login(formData);
        redirect("/");
      }}
      component="form"
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Login
      </Button>
    </Box>
  );
}
