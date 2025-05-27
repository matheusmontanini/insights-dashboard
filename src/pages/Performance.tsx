
import React, { useState } from 'react';
import { TrendingUp, PieChart, Target, AlertTriangle } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import { TooltipProvider } from '@/components/ui/tooltip';

const Performance = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  const portfolioAllocationData = [
    { name: 'CDB', value: 45 },
    { name: 'LCI/LCA', value: 30 },
    { name: 'Debêntures', value: 15 },
    { name: 'Fundos', value: 10 },
  ];

  const performanceByAssetData = [
    { name: 'CDB Banco A', value: 12.5 },
    { name: 'LCI Banco B', value: 10.8 },
    { name: 'Debênture XYZ', value: 14.2 },
    { name: 'Fundo ABC', value: 9.7 },
  ];

  const riskConcentrationData = [
    { name: 'Banco ABC', value: 35 },
    { name: 'Banco XYZ', value: 28 },
    { name: 'Empresa DEF', value: 20 },
    { name: 'Outros', value: 17 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading performance report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Performance da Carteira</h1>
          <p className="text-gray-600">Análise detalhada da performance e composição da carteira</p>
        </div>

        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs de Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Rentabilidade Média"
            value="12.8%"
            subtitle="Retorno anualizado"
            trend="up"
            trendValue="+0.5%"
            icon={<TrendingUp className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Prazo Médio"
            value="18 meses"
            subtitle="Vencimento médio"
            icon={<Target className="h-6 w-6" />}
            color="primary"
          />
          <KPICard
            title="Taxa de Inadimplência"
            value="1.2%"
            subtitle="Histórico 12 meses"
            trend="down"
            trendValue="-0.3%"
            icon={<AlertTriangle className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Índice Sharpe"
            value="1.45"
            subtitle="Risco vs retorno"
            trend="up"
            trendValue="+0.12"
            icon={<PieChart className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Gráficos de Composição da Carteira */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Alocação por Tipo de Ativo"
            type="pie"
            data={portfolioAllocationData}
            height={350}
          />
          <ChartCard
            title="Performance por Ativo (%)"
            type="bar"
            data={performanceByAssetData}
            height={350}
          />
        </div>

        {/* Análise de Risco */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Análise de Risco</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Concentração de Risco por Emissor"
              type="pie"
              data={riskConcentrationData}
              height={350}
            />
            <div className="space-y-4">
              <KPICard
                title="VaR (95%)"
                value="R$ 1.2M"
                subtitle="Value at Risk"
                icon={<AlertTriangle className="h-6 w-6" />}
                color="warning"
              />
              <KPICard
                title="Ativos com Atraso"
                value="3"
                subtitle="Requer atenção"
                trend="neutral"
                icon={<AlertTriangle className="h-6 w-6" />}
                color="warning"
              />
              <KPICard
                title="Diversificação"
                value="Alto"
                subtitle="85% do ideal"
                trend="up"
                trendValue="+5%"
                color="success"
              />
            </div>
          </div>
        </div>

        {/* Métricas Avançadas */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Métricas Avançadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Duration Modificada"
              value="2.3 anos"
              subtitle="Sensibilidade à taxa"
              color="primary"
            />
            <KPICard
              title="Beta da Carteira"
              value="0.85"
              subtitle="vs Benchmark"
              trend="neutral"
              color="primary"
            />
            <KPICard
              title="Tracking Error"
              value="2.1%"
              subtitle="Desvio do benchmark"
              trend="down"
              trendValue="-0.2%"
              color="success"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Performance;
