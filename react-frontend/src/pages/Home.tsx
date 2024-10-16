import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2">Welcome to the Todo List App!</Typography>
      <Typography variant="body1">Manage your tasks efficiently.</Typography>
    </Box>
  );
};

export default Home;
