import React from 'react'
import { PieChart, Pie} from 'recharts';
const Income = () => {
    const data = [
        {name: 'Ordenado', students: 700},
        {name: 'Subsidio', students: 200},
        {name: 'Horas-Extras', students: 300},
        {name: 'Outros', students: 150}
      ];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
  
  return (
    <PieChart width={300} height={300}>
              <Pie 
                data={data} 
                dataKey="students" 
                fill="#3b00bb"
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150} 
              />
    </PieChart> 
  )
}

export default Income