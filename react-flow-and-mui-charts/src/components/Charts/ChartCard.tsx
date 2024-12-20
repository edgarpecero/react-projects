import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { LineChart } from "@mui/x-charts";

export interface ChartCardProps {
  data: { x: number, y: number }[];
  title: string;
  value: number;
  color?: string;
}

const ChartCard = ({ data, title, value }: ChartCardProps) => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 2, m: 1, flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column",  p: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle2" color="orange">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {value || 0}% (vs LW)
            </Typography>
          </Box>
          <IconButton size="small" color="primary">
            <AddIcon />
          </IconButton>
        </Box>

        <Typography variant="h6" color="black" sx={{ my: 1 }}>
          {value || 0}
        </Typography>

        <Box flexGrow={1}>
          <LineChart
            xAxis={[{ data: data.map((point) => point.x) }]}
            series={[{ data: data.map((point) => point.y) }]}
            colors={["#00BFFF"]}
            margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ChartCard;