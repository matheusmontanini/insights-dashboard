
import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, Building2, Info } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Accounts = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  const evolutionData = [
    { name: 'Jan', value: 1200, value2: 950 },
    { name: 'Fev', value: 1450, value2: 1100 },
    { name: 'Mar', value: 1650, value2: 1250 },
    { name: 'Abr', value: 1800, value2: 1400 },
    { name: 'Mai', value: 2100, value2: 1650 },
    { name: 'Jun', value: 2350, value2: 1850 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading accounts report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Gestão de Contas</h1>
          <p className="text-gray-600">Visão completa das contas de investidores</p>
        </div>

        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Volume Sob Gestão"
            value="R$ 127M"
            subtitle="AUM atual"
            trend="up"
            trendValue="+15%"
            icon={<Building2 className="h-6 w-6" />}
            color="primary"
          />
          <KPICard
            title={
              <div className="flex items-center gap-2">
                <span>Depósitos</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Depósitos de investidores</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            value="R$ 3.8M"
            subtitle="Este mês"
            trend="up"
            trendValue="+22%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Saques"
            value="R$ 1.2M"
            subtitle="Este mês"
            trend="down"
            trendValue="-5%"
            icon={<DollarSign className="h-6 w-6" />}
            color="warning"
          />
          <KPICard
            title="Total Investido"
            value="R$ 4.5M"
            subtitle="Este mês"
            trend="up"
            trendValue="+25%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Segunda linha de KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title={
              <div className="flex items-center gap-2">
                <span>Contas Abertas</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total de contas criadas na plataforma</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            value="2.347"
            subtitle="Este mês"
            trend="up"
            trendValue="+12%"
            icon={<Users className="h-6 w-6" />}
          />
          <KPICard
            title={
              <div className="flex items-center gap-2">
                <span>Contas Ativas</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contas com qualquer movimentação nos últimos 30 dias</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            value="1.856"
            subtitle="≥ R$ 1.000"
            trend="up"
            trendValue="+8%"
            icon={<TrendingUp className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title={
              <div className="flex items-center gap-2">
                <span>Contas Ativadas</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contas que investiram a partir de R$ 1.000,00. Considerado apenas uma vez.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            value="1.623"
            subtitle="Investiram R$ 1k+"
            trend="up"
            trendValue="+15%"
            icon={<TrendingUp className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Taxa de Ativação"
            value="79.1%"
            subtitle="Conversão"
            trend="neutral"
            icon={<TrendingUp className="h-6 w-6" />}
          />
        </div>

        {/* Gráficos e métricas de crescimento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Evolução de Contas (Abertas vs Ativadas)"
            type="line"
            data={evolutionData}
            height={350}
          />
          <div className="space-y-4">
            <KPICard
              title="Crescimento Mensal"
              value="+347"
              subtitle="Novas contas abertas"
              trend="up"
              trendValue="+12% vs mês anterior"
              color="success"
            />
            <KPICard
              title="Crescimento em Receita"
              value="+R$ 125K"
              subtitle="Receita mensal"
              trend="up"
              trendValue="+18% vs mês anterior"
              color="success"
            />
            <KPICard
              title="Crescimento em Aportes"
              value="+R$ 850K"
              subtitle="Depósitos mensais"
              trend="up"
              trendValue="+22% vs mês anterior"
              color="success"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Accounts;
