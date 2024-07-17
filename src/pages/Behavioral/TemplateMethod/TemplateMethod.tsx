import { Tabs } from 'antd'

import TabPane from 'antd/es/tabs/TabPane'

import LineChart from './LineChart.tsx'
import BarChart from './BarChart.tsx'
import PieChart from './PieChart.tsx'

const data = [300, 400, 500]
const labels = ['Red', 'Blue', 'Yellow']

const TemplateMethod = () => {
  return (
    <div style={{ padding: 24 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Line Chart" key="1">
          <LineChart data={data} labels={labels} />
        </TabPane>
        <TabPane tab="Bar Chart" key="2">
          <BarChart data={data} labels={labels} />
        </TabPane>
        <TabPane tab="Pie Chart" key="3">
          <PieChart data={data} labels={labels} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TemplateMethod;