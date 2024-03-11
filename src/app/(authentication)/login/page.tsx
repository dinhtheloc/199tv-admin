import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Login from "./login";

export default function Page() {
  return (
    <Container component="main" fixed maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Image
          className="mb-16"
          src="/logo.svg"
          width={400}
          height={100}
          alt="199 tv live"
        />
        <Typography
          component="h1"
          sx={{
            fontWeight: "bold",
          }}
          variant="h4"
        >
          Admin & Agent Login
        </Typography>
        <Login></Login>
      </Box>
    </Container>
  );
}
