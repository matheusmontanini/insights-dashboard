import React, { useState } from 'react';
import { Building2, Users, TrendingUp, DollarSign, Shield, AlertTriangle, Info } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import StatusTable from '@/components/dashboard/StatusTable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Index = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  // Dados simulados para os gráficos
  const evolutionData = [
    { name: 'Jan', value: 1200, value2: 950 },
    { name: 'Fev', value: 1450, value2: 1100 },
    { name: 'Mar', value: 1650, value2: 1250 },
    { name: 'Abr', value: 1800, value2: 1400 },
    { name: 'Mai', value: 2100, value2: 1650 },
    { name: 'Jun', value: 2350, value2: 1850 },
  ];

  const captationData = [
    { name: 'Jan', value: 2500000 },
    { name: 'Fev', value: 3200000 },
    { name: 'Mar', value: 2800000 },
    { name: 'Abr', value: 4100000 },
    { name: 'Mai', value: 3600000 },
    { name: 'Jun', value: 4500000 },
  ];

  const revenueData = [
    { name: 'Setup', value: 125000 },
    { name: 'Administração', value: 320000 },
    { name: 'Performance', value: 180000 },
    { name: 'Mercado Sec.', value: 95000 },
  ];

  const riskConcentrationData = [
    { name: 'Banco ABC', value: 35 },
    { name: 'Banco XYZ', value: 28 },
    { name: 'Empresa DEF', value: 20 },
    { name: 'Outros', value: 17 },
  ];

  // Dados da tabela de compliance - Fixed TypeScript error
  const complianceData = [
    {
      id: '1',
      name: 'João Silva',
      status: 'success' as const,
      value: 'R$ 150.000',
      details: 'KYC Aprovado'
    },
    {
      id: '2',
      name: 'Maria Santos',
      status: 'pending' as const,
      value: 'R$ 75.000',
      details: 'Documentos Pendentes'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      status: 'warning' as const,
      value: 'R$ 120.000',
      details: 'Em Análise PLD'
    },
    {
      id: '4',
      name: 'Ana Oliveira',
      status: 'danger' as const,
      value: 'R$ 200.000',
      details: 'Transação Suspeita'
    },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Dashboard Geral</h1>
          <p className="text-gray-600">Visão geral de todos os indicadores da plataforma</p>
        </div>

        {/* Filtros */}
        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
            title="Total Captado"
            value="R$ 4.5M"
            subtitle="Este mês"
            trend="up"
            trendValue="+25%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
          <KPICard
            title="Volume Sob Gestão"
            value="R$ 127M"
            subtitle="AUM atual"
            trend="up"
            trendValue="+15%"
            icon={<Building2 className="h-6 w-6" />}
          />
          <KPICard
            title="Receita Total"
            value="R$ 720K"
            subtitle="Este mês"
            trend="up"
            trendValue="+18%"
            icon={<DollarSign className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Resumo por Seções */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Evolução de Contas (Abertas vs Ativas)"
            type="line"
            data={evolutionData}
            height={350}
          />
          <ChartCard
            title="Evolução da Captação Mensal"
            type="bar"
            data={captationData}
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Receita por Fonte"
            type="pie"
            data={revenueData}
            height={350}
          />
          <ChartCard
            title="Concentração de Risco por Emissor"
            type="pie"
            data={riskConcentrationData}
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
