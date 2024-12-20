import { Box, Grid2, Typography } from '@mui/material';
import Flow from '../components/Flow/Flow';
// import BarChartWrapped from '../components/Charts/BarChart';
// import LineChartWrapped from '../components/Charts/LineChart';
import GaugeWrapped from '../components/Charts/Gauge';

const chartComponents = [
    // { component: <BarChartWrapped />, label: 'Bar Chart' },
    // { component: <LineChartWrapped />, label: 'Line Chart' },
    { component: <GaugeWrapped />, label: 'Gauge' },
];

const Dashboard = () => {
    return (
        <Box sx={{ p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid2 container spacing={4} sx={{ flexGrow: 1, background: 'white', p: 4, borderRadius: 4 }}>
                <Grid2 size={6}>
                    <Typography variant="h6">Flow</Typography>
                    <Flow />
                </Grid2>
                <Grid2 size={6}>
                    <Grid2 container spacing={2}>
                        {chartComponents.map((chart, index) => (
                            <Grid2 key={index} size={6}>
                                <Typography variant="h6">{chart.label}</Typography>
                                {chart.component}
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Dashboard;
