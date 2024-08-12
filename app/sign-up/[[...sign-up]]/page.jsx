import { SignUp } from "@clerk/nextjs";
import { Box, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box display={"flex"}>
      <Box width={"50vw"} height={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} margin={"0 0 0 2rem"}>
        <Typography variant="h3">Start your journey of consistency with Us.</Typography>
        <Typography variant="h5">Make an account to create Flashcards and track your progress.</Typography>
      </Box>
      <Box width={"50vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <SignUp />
      </Box>
    </Box>
  );
}