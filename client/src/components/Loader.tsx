import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        p: "50px",
        m: "0 auto",
      }}
    >
      <span className="loader"></span>;
    </Box>
  );
};

export default Loader;
