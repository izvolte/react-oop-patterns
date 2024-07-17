import React from 'react';
import { Card } from 'antd';
import { ChartData, ChartOptions } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

type ChartType = 'line' | 'bar' | 'pie';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type BaseChartProps = {
  title: string;
  labels?: string[];
  data?: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  options?: ChartOptions<'line'> | ChartOptions<'bar'> | ChartOptions<'pie'>;
  type: ChartType;
};

const BaseChart: React.FC<BaseChartProps> = ({
   title,
   labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
   data = [65, 59, 80, 81, 56, 55, 40],
   backgroundColor = ['rgba(75,192,192,0.4)'],
   borderColor = ['rgba(75,192,192,1)'],
   options,
   type,
  }) => {

  const defaultOptions: ChartOptions<'line'> | ChartOptions<'bar'> | ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  const chartData: ChartData<'line' | 'bar' | 'pie'> = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={chartData as ChartData<'line'>} options={options as ChartOptions<'line'> || defaultOptions} />;
      case 'bar':
        return <Bar data={chartData as ChartData<'bar'>} options={options as ChartOptions<'bar'> || defaultOptions} />;
      case 'pie':
        return <Pie data={chartData as ChartData<'pie'>} options={options as ChartOptions<'pie'> || defaultOptions} />;
      default:
        return null;
    }
  };

  return (
    <Card title={title}>
      {renderChart()}
    </Card>
  );
};

export default BaseChart;