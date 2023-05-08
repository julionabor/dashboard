import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {name: 'Jan', pv: 2400, amt: 2400},
  {name: 'Feb', pv: 1398, amt: 2210},
  {name: 'March', pv: 9800, amt: 2290},
  {name: 'Apr', pv: 3908, amt: 2000},
  {name: 'May', pv: 4800, amt: 2181},
  {name: 'Jun', pv: 3800, amt: 2500},
  ];


const Grafico = () => {
  return (
    <div>
          <LineChart
            width={250}
            height={150}
            data={data}
            margin={{top: 5, right: 5, left: 5, bottom: 5}}
          >
          <Line
              type='monotone'
              dataKey='amt'
              stroke='#8884d8'
              activeDot={{r: 8}}
              />
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <YAxis/>
          <XAxis dataKey='name'/>
          <Legend />
          </LineChart>
      
</div>
  )
}

export default Grafico