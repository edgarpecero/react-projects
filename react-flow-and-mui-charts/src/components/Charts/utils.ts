import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

export const chartStyles = {
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
    },
    [`& .${chartsGridClasses.line}`]: {
        strokeDasharray: '5 3',
        strokeWidth: 2,
    },
};

export const commonChartProps = {
    grid: {
        horizontal: true
    },
    sx: { chartStyles }
}