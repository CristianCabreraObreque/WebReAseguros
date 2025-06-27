import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartCardProps {
  title: string;
  subtitle: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle }) => {
  // Simulated chart data
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const data = [3.2, 4.1, 3.8, 4.5, 5.2, 4.8, 5.1, 4.9, 5.3, 4.7, 5.8, 6.2];
  const maxValue = Math.max(...data);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="flex items-end space-x-2 h-40">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${(value / maxValue) * 100}%` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{months[index]}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">Millones USD</span>
        <span className="font-medium text-gray-900">Promedio: $4.8M</span>
      </div>
    </div>
  );
};

export default ChartCard;