import { Box } from "@mui/material";
import MenuAppBar from "../components/MenuAppBar/MenuAppBar"
import MetricsDashboard from "./thd/Dashboard/MetricsDashboard";

const Home = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MenuAppBar />
      <MetricsDashboard />
    </Box>
  )
}

export default Home;
