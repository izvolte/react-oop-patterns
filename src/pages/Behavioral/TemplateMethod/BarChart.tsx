import BaseChart from './BaseChart';

type PropsType = {
  labels: string[]
  data: number[]
}
const BarChart = ({labels, data}: PropsType) => {
  return (
    <BaseChart
      title="Bar chart"
      type="bar"
      labels={labels}
      data={data}
      backgroundColor={['rgba(75,192,192,0.4)']}
      borderColor={['rgba(75,192,192,1)']}
    />
  );
};

export default BarChart;