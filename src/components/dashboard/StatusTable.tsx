
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TableRow {
  id: string;
  name: string;
  status: 'success' | 'warning' | 'danger' | 'pending';
  value: string;
  details?: string;
}

interface StatusTableProps {
  title: string;
  data: TableRow[];
  className?: string;
}

const StatusTable: React.FC<StatusTableProps> = ({
  title,
  data,
  className = ""
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-zuvia-success/10 text-zuvia-success border-zuvia-success/20';
      case 'warning':
        return 'bg-zuvia-warning/10 text-zuvia-warning border-zuvia-warning/20';
      case 'danger':
        return 'bg-zuvia-danger/10 text-zuvia-danger border-zuvia-danger/20';
      case 'pending':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'success':
        return 'Aprovado';
      case 'warning':
        return 'Em Análise';
      case 'danger':
        return 'Irregular';
      case 'pending':
        return 'Pendente';
      default:
        return 'N/A';
    }
  };

  return (
    <Card className={`p-6 border-2 rounded-2xl shadow-sm bg-white ${className}`}>
      <h3 className="text-lg font-semibold text-zuvia-primary mb-4">{title}</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Nome</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Status</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-600">Valor</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-2">
                  <span className="font-medium text-zuvia-primary">{row.name}</span>
                </td>
                <td className="py-4 px-2">
                  <Badge className={`rounded-full ${getStatusColor(row.status)}`}>
                    {getStatusText(row.status)}
                  </Badge>
                </td>
                <td className="py-4 px-2 text-right">
                  <span className="font-semibold text-gray-900">{row.value}</span>
                </td>
                <td className="py-4 px-2">
                  <span className="text-sm text-gray-500">{row.details || '-'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default StatusTable;
