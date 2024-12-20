import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { LineChart } from "@mui/x-charts";

const OpenTicketLineChart = () => {
  const data = [
    { x: 1, y: 0 },
    { x: 2, y: 1 },
    { x: 3, y: 2 },
    { x: 4, y: 1.5 },
    { x: 5, y: 3 },
    { x: 6, y: 4 },
  ];

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 2, p: 2, minWidth: 250 }}>
      <CardContent>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle2" color="orange">
              Open Tickets
            </Typography>
            <Typography variant="body2" color="textSecondary">
              0% (vs LW)
            </Typography>
          </Box>
          <IconButton size="small" color="primary">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Value Display */}
        <Typography variant="h4" color="black" sx={{ my: 1 }}>
          0
        </Typography>

        {/* Line Chart */}
        <Box sx={{ height: 60 }}>
          <LineChart
            xAxis={[{ data: data.map((point) => point.x) }]}
            series={[{ data: data.map((point) => point.y) }]}
            height={60}
            colors={["#00BFFF"]}
            margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
export default OpenTicketLineChart;
