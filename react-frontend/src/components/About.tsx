import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2">About This App</Typography>
      <Typography variant="body1">
        This app helps you manage your tasks using a simple and intuitive
        interface.
      </Typography>
    </Box>
  );
};

export default About;
