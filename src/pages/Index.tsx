import React, { useState } from 'react';
import { Building2, Users, TrendingUp, DollarSign, Shield, AlertTriangle, Info, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import StatusTable from '@/components/dashboard/StatusTable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Index = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  // Dados simulados para os gráficos
  const volumeEvolutionData = [
    { name: 'Jan', value: 85000000 },
    { name: 'Fev', value: 92000000 },
    { name: 'Mar', value: 105000000 },
    { name: 'Abr', value: 118000000 },
    { name: 'Mai', value: 125000000 },
    { name: 'Jun', value: 127000000 },
  ];

  const depositsEvolutionData = [
    { name: 'Jan', value: 12500000 },
    { name: 'Fev', value: 15200000 },
    { name: 'Mar', value: 18800000 },
    { name: 'Abr', value: 21100000 },
    { name: 'Mai', value: 19600000 },
    { name: 'Jun', value: 23500000 },
  ];

  const withdrawalsEvolutionData = [
    { name: 'Jan', value: 3200000 },
    { name: 'Fev', value: 2800000 },
    { name: 'Mar', value: 4100000 },
    { name: 'Abr', value: 3600000 },
    { name: 'Mai', value: 5200000 },
    { name: 'Jun', value: 4800000 },
  ];

  const totalInvestedEvolutionData = [
    { name: 'Jan', value: 78000000 },
    { name: 'Fev', value: 84500000 },
    { name: 'Mar', value: 99200000 },
    { name: 'Abr', value: 116700000 },
    { name: 'Mai', value: 131100000 },
    { name: 'Jun', value: 149800000 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Dashboard Financeiro</h1>
            <p className="text-gray-600">Visão geral dos indicadores financeiros da plataforma</p>
          </div>
          <Link 
            to="/tv-dashboard"
            className="flex items-center space-x-2 bg-zuvia-primary text-white px-6 py-3 rounded-xl hover:bg-zuvia-primary/90 transition-colors"
          >
            <Tv className="h-5 w-5" />
            <span>Dashboard TV</span>
          </Link>
        </div>

        {/* Filtros */}
        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs Financeiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Volume Sob Gestão"
            value="R$ 127M"
            subtitle="AUM atual"
            trend="up"
            trendValue="+15%"
            icon={<Building2 className="h-6 w-6" />}
          />
          <KPICard
            title="Depósitos"
            value="R$ 23.5M"
            subtitle="Este mês"
            trend="up"
            trendValue="+20%"
            icon={<TrendingUp className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Saques"
            value="R$ 4.8M"
            subtitle="Este mês"
            trend="down"
            trendValue="-8%"
            icon={<AlertTriangle className="h-6 w-6" />}
            color="warning"
          />
          <KPICard
            title="Total Investido"
            value="R$ 149.8M"
            subtitle="Acumulado"
            trend="up"
            trendValue="+14%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Gráficos de Evolução */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Evolução do Volume Sob Gestão"
            type="line"
            data={volumeEvolutionData}
            height={350}
          />
          <ChartCard
            title="Evolução dos Depósitos Mensais"
            type="bar"
            data={depositsEvolutionData}
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Evolução dos Saques Mensais"
            type="bar"
            data={withdrawalsEvolutionData}
            height={350}
          />
          <ChartCard
            title="Evolução do Total Investido"
            type="line"
            data={totalInvestedEvolutionData}
            height={350}
          />
        </div>

        {/* Links para seções específicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border-2 border-zuvia-primary/20 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <Users className="h-8 w-8 text-zuvia-primary mb-4" />
            <h3 className="text-lg font-semibold text-zuvia-primary mb-2">Gestão de Contas</h3>
            <p className="text-gray-600 text-sm">Acesse a análise completa das contas de investidores</p>
          </div>
          <div className="p-6 bg-white border-2 border-zuvia-primary/20 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <TrendingUp className="h-8 w-8 text-zuvia-primary mb-4" />
            <h3 className="text-lg font-semibold text-zuvia-primary mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">Visualize a performance da carteira de investimentos</p>
          </div>
          <div className="p-6 bg-white border-2 border-zuvia-primary/20 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <DollarSign className="h-8 w-8 text-zuvia-primary mb-4" />
            <h3 className="text-lg font-semibold text-zuvia-primary mb-2">Financeiro</h3>
            <p className="text-gray-600 text-sm">Análise detalhada da receita e saúde financeira</p>
          </div>
          <div className="p-6 bg-white border-2 border-zuvia-primary/20 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <Shield className="h-8 w-8 text-zuvia-primary mb-4" />
            <h3 className="text-lg font-semibold text-zuvia-primary mb-2">Compliance</h3>
            <p className="text-gray-600 text-sm">Monitoramento de conformidade e prevenção</p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Index;
