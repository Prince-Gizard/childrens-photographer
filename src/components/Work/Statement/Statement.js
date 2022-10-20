import { Typography, Box } from "@mui/material";

const Statement = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        color="primary"
        fontWeight="bold"
        align="center"
        mb={1}
        sx={{ letterSpacing: "0.15rem" }}
      >
        MAMA STATEMENT
      </Typography>
      <Typography variant="subtitle1" color="secondary" align="center" mb={2}>
        My focus is child photography.
      </Typography>
    </Box>
  );
};

export default Statement;
