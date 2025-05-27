
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartCardProps {
  title: string;
  type: 'line' | 'bar' | 'pie';
  data: any[];
  height?: number;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  type,
  data,
  height = 300,
  className = ""
}) => {
  const colors = ['#001F3F', '#09CD53', '#FFC107', '#DC3545', '#6C757D'];

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
              <XAxis dataKey="name" stroke="#6C757D" />
              <YAxis stroke="#6C757D" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #E9ECEF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#001F3F" 
                strokeWidth={3}
                dot={{ fill: '#001F3F', r: 6 }}
                activeDot={{ r: 8, fill: '#09CD53' }}
              />
              {data[0]?.value2 && (
                <Line 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#09CD53" 
                  strokeWidth={3}
                  dot={{ fill: '#09CD53', r: 6 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
              <XAxis dataKey="name" stroke="#6C757D" />
              <YAxis stroke="#6C757D" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #E9ECEF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar dataKey="value" fill="#001F3F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #E9ECEF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className={`p-6 border-2 rounded-2xl shadow-sm bg-white ${className}`}>
      <h3 className="text-lg font-semibold text-zuvia-primary mb-4">{title}</h3>
      {renderChart()}
    </Card>
  );
};

export default ChartCard;
