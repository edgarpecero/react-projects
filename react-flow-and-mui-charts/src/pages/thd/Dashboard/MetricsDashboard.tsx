import { Box, Grid2, Typography } from "@mui/material";
import RadioButtonsGroup from "../../../components/RadioButtonsGroup/RadioButtonsGroup";
import { chartCards, barCharts, radioButtons } from "./MetricsDashboard.utils";
import ChartCard, { ChartCardProps } from "../../../components/Charts/ChartCard";
import BarChartWrapped, { BarChartWrappedProps } from "../../../components/Charts/BarChart";

const MetricsDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">Snow Metrics Dashboard</Typography>
      <RadioButtonsGroup buttons={radioButtons} />
      <Grid2 container flexGrow={1}>
        <Grid2 size={3} display={'flex'} flexDirection={"column"}>
          {chartCards.map((props: ChartCardProps) => (
            <ChartCard {...props} />
          ))}
        </Grid2>
        <Grid2 size={9}>
          {barCharts.map((props: BarChartWrappedProps) => (
            <BarChartWrapped {...props} />
          ))}
        </Grid2>
      </Grid2>
    </Box>
  )
};

export default MetricsDashboard;