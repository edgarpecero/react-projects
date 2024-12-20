import { Box, Typography } from "@mui/material";
import { chartStyles } from './utils';
import { BarChart, BarChartProps } from '@mui/x-charts';

export interface BarChartWrappedProps {
  title: string;
  lineChartOverlay?: boolean;
  seriesItems: SeriesItems[],
  chartProps: BarChartProps;
}

interface SeriesItems {
  label: string,
  color: string
}


const BarChartWrapped = ({ title, chartProps, seriesItems, lineChartOverlay }: BarChartWrappedProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        boxShadow: 2,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Typography variant="h6" color="orange" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Box sx={{ position: "relative", width: "100%", height: 300 }}>
        <BarChart
          {...chartProps}
          height={300}
          grid={{
            horizontal: true,
          }}
          sx={chartStyles}
        />
        {lineChartOverlay
          ? <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          >
            <line
              x1="20%"
              y1="20%"
              x2="80%"
              y2="80%"
              stroke="blue"
              strokeWidth={2}
            />
          </svg>
          : null}
      </Box>

      <Box display="flex" justifyContent="center" mt={2} gap={1}>
        {seriesItems.map(({ label, color }) => (
          <Box display="flex" alignItems="center">
            <Box sx={{ width: 12, height: 12, backgroundColor: color, borderRadius: "50%", mr: 1 }} />
            <Typography variant="body2">{label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default BarChartWrapped;
