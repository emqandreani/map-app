import { Box, Typography } from "@mui/material";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <Box className={styles.page} data-testid="home-page">
      <Typography className={styles.text} data-testid="text" variant="h2">
        Map
      </Typography>
    </Box>
  );
}
