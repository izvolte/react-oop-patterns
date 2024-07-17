import BaseChart from './BaseChart';

type PropsType = {
  labels: string[]
  data: number[]
}

const LineChart = ({labels, data}: PropsType) => {
  return (
    <BaseChart
      title="Line chart"
      type="line"
      labels={labels}
      data={data}
    />
  );
};

export default LineChart;