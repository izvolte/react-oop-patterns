import BaseChart from './BaseChart';

type PropsType = {
  labels: string[]
  data: number[]
}
const PieChart = ({labels, data}: PropsType) => {
  return (
    <BaseChart
      title="Distribution of Colors"
      type="pie"
      labels={labels}
      data={data}
      backgroundColor={['#FF6384', '#36A2EB', '#FFCE56']}
    />
  );
};

export default PieChart;