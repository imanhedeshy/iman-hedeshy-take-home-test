import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          The Best To-Do List App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
