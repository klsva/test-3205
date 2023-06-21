import { AppBar, Toolbar, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: { md: "890px", sm: "580px", xs: "320px" },
          m: "0 auto",
          p: "10px",
        }}
        variant="dense"
      >
        <Typography variant="h5" color="inherit" component="div">
          Search user data by e-mail
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
