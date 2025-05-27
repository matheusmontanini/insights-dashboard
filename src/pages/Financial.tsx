
import React, { useState } from 'react';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import { TooltipProvider } from '@/components/ui/tooltip';

const Financial = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  const revenueEvolutionData = [
    { name: 'Jan', value: 580000 },
    { name: 'Fev', value: 620000 },
    { name: 'Mar', value: 650000 },
    { name: 'Abr', value: 680000 },
    { name: 'Mai', value: 700000 },
    { name: 'Jun', value: 720000 },
  ];

  const revenueBySourceData = [
    { name: 'Setup', value: 125000 },
    { name: 'Administração', value: 320000 },
    { name: 'Performance', value: 180000 },
    { name: 'Mercado Sec.', value: 95000 },
  ];

  const profitabilityData = [
    { name: 'Jan', receita: 580000, custos: 380000, lucro: 200000 },
    { name: 'Fev', receita: 620000, custos: 400000, lucro: 220000 },
    { name: 'Mar', receita: 650000, custos: 420000, lucro: 230000 },
    { name: 'Abr', receita: 680000, custos: 440000, lucro: 240000 },
    { name: 'Mai', receita: 700000, custos: 450000, lucro: 250000 },
    { name: 'Jun', receita: 720000, custos: 470000, lucro: 250000 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading financial report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Gestão Financeira</h1>
          <p className="text-gray-600">Análise completa da receita e saúde financeira</p>
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
            title="Receita Total"
            value="R$ 720K"
            subtitle="Este mês"
            trend="up"
            trendValue="+18%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Crescimento da Receita"
            value="+R$ 125K"
            subtitle="vs mês anterior"
            trend="up"
            trendValue="+20.9%"
            icon={<TrendingUp className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Margem de Lucro"
            value="34.2%"
            subtitle="Margem operacional"
            trend="up"
            trendValue="+2.1%"
            icon={<PieChart className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="EBITDA"
            value="R$ 485K"
            subtitle="Este mês"
            trend="up"
            trendValue="+15%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Evolução da Receita */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Evolução da Receita</h2>
          <ChartCard
            title="Receita Mensal (R$)"
            type="bar"
            data={revenueEvolutionData}
            height={400}
          />
        </div>

        {/* Análise de Receita por Fonte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Receita por Fonte"
            type="pie"
            data={revenueBySourceData}
            height={350}
          />
          <div className="space-y-4">
            <KPICard
              title="Taxa de Setup"
              value="R$ 125K"
              subtitle="17.4% da receita"
              trend="up"
              trendValue="+12%"
              color="primary"
            />
            <KPICard
              title="Taxa de Administração"
              value="R$ 320K"
              subtitle="44.4% da receita"
              trend="up"
              trendValue="+8%"
              color="success"
            />
            <KPICard
              title="Taxa de Performance"
              value="R$ 180K"
              subtitle="25% da receita"
              trend="up"
              trendValue="+35%"
              color="success"
            />
          </div>
        </div>

        {/* Análise de Lucratividade */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Análise de Lucratividade</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Receita vs Custos vs Lucro"
              type="line"
              data={profitabilityData}
              height={350}
            />
            <div className="space-y-4">
              <KPICard
                title="ROE"
                value="18.5%"
                subtitle="Return on Equity"
                trend="up"
                trendValue="+2.3%"
                color="success"
              />
              <KPICard
                title="ROI"
                value="22.1%"
                subtitle="Return on Investment"
                trend="up"
                trendValue="+1.8%"
                color="success"
              />
              <KPICard
                title="Margem Líquida"
                value="29.8%"
                subtitle="Lucro líquido"
                trend="up"
                trendValue="+1.5%"
                color="success"
              />
            </div>
          </div>
        </div>

        {/* Métricas Financeiras Adicionais */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Indicadores Financeiros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Fluxo de Caixa"
              value="R$ 2.1M"
              subtitle="Disponível"
              trend="up"
              trendValue="+25%"
              color="success"
            />
            <KPICard
              title="Burn Rate"
              value="R$ 450K"
              subtitle="Gasto mensal"
              trend="down"
              trendValue="-5%"
              color="success"
            />
            <KPICard
              title="Runway"
              value="14 meses"
              subtitle="Com atual queima"
              trend="up"
              trendValue="+2 meses"
              color="primary"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Financial;
