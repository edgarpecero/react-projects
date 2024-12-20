import { BarChartWrappedProps } from "../../../components/Charts/BarChart";
import { RadioButton } from "../../../components/RadioButtonsGroup/RadioButtonsGroup";

export const radioButtons: RadioButton[] = [
  {
    label: 'All',
    value: 'all',
    disable: false,
  },
  {
    label: 'Incident',
    value: 'incident',
    disable: false,
  },
  {
    label: 'Change Req',
    value: 'changeReq',
    disable: false,
  },
];


const dummyChartData = [
  { x: 1, y: 0 },
  { x: 2, y: 1 },
  { x: 3, y: 2 },
  { x: 4, y: 1.5 },
  { x: 5, y: 3 },
  { x: 6, y: 4 },
];

export const chartCards = [
  {
    title: 'Open Tickets',
    value: 48,
    data: dummyChartData,
  },
  {
    title: 'Closed Tickets',
    value: 16,
    data: dummyChartData,
  },
  {
    title: 'In Progress Tickets',
    value: 32,
    data: dummyChartData,
  },
  {
    title: 'SLA Closed Tickets',
    value: 75.00,
    data: dummyChartData,
  },
  {
    title: 'Mean Time To Resolve (Days)',
    value: 2.36,
    data: dummyChartData,
  },
];

export const barCharts: BarChartWrappedProps[] = [
  {
    title: 'New & Closed Ticket Count',
    seriesItems: [
      {
        label: 'New Ticket',
        color: 'orange',
      },
      {
        label: 'Closed Ticket',
        color: 'green',
      }
    ],
    chartProps: {
      yAxis: [
        {
          label: 'Ticket Count'
        }
      ],
      dataset: [
        { x: "12-01", newTicket: 3, closedTicket: 4 },
        { x: "12-02", newTicket: 3, closedTicket: 4 },
        { x: "12-03", newTicket: 3, closedTicket: 4 },
        { x: "12-04", newTicket: 0, closedTicket: 0 },
        { x: "12-05", newTicket: 2, closedTicket: 2 },
        { x: "12-06", newTicket: 0, closedTicket: 0 },
        { x: "12-07", newTicket: 0, closedTicket: 0 },
      ],
      xAxis: [{ scaleType: 'band', dataKey: 'x' }],
      series: [
        {
          dataKey: 'newTicket',
          color: 'green',
        },
        {
          dataKey: 'closedTicket',
          color: 'orange',
        },
      ]
    }
  },
  {
    lineChartOverlay: true,
    title: 'New Ticket Count & MTTR (Days)',
    seriesItems: [
      {
        label: 'MTTR',
        color: 'green',
      },
      {
        label: 'New Ticket Count',
        color: 'orange',
      },
    ],
    chartProps: {
      yAxis: [
        {
          label: 'Count of New Tickets'
        }
      ],
      dataset: [
        { x: "FW42", count: 15 },
        { x: "FW43", count: 30 },
        { x: "FW44", count: 17 },
      ],
      xAxis: [{ scaleType: 'band', dataKey: 'x' }],
      series: [
        {
          dataKey: 'count',
          color: 'orange',
        },
      ],
      barLabel:"value"
    }
  },
];
