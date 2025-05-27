
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  icon,
  color = 'primary'
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'border-zuvia-success/20 bg-zuvia-success/5';
      case 'warning':
        return 'border-zuvia-warning/20 bg-zuvia-warning/5';
      case 'danger':
        return 'border-zuvia-danger/20 bg-zuvia-danger/5';
      default:
        return 'border-zuvia-primary/20 bg-zuvia-primary/5';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-zuvia-success';
      case 'down':
        return 'text-zuvia-danger';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card className={`p-6 border-2 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${getColorClasses()}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && (
          <div className="text-zuvia-primary">
            {icon}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-3xl font-bold text-zuvia-primary">{value}</p>
        
        {subtitle && (
          <p className="text-sm text-gray-500">{subtitle}</p>
        )}
        
        {trend && trendValue && (
          <div className={`flex items-center text-sm ${getTrendColor()}`}>
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : trend === 'down' ? (
              <TrendingDown className="h-4 w-4 mr-1" />
            ) : null}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default KPICard;
