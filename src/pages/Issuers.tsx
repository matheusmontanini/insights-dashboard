
import React, { useState } from 'react';
import { Building, TrendingUp, AlertTriangle, Target, Clock, Info } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Issuers = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  // Dados simulados para evolução mensal de emissões
  const monthlyIssuanceData = [
    { name: 'Jan', value: 45000000 },
    { name: 'Fev', value: 52000000 },
    { name: 'Mar', value: 48000000 },
    { name: 'Abr', value: 58000000 },
    { name: 'Mai', value: 61000000 },
    { name: 'Jun', value: 65000000 },
  ];

  // Dados simulados para evolução semanal de emissões
  const weeklyIssuanceData = [
    { name: 'Sem 1', value: 15200000 },
    { name: 'Sem 2', value: 18400000 },
    { name: 'Sem 3', value: 16800000 },
    { name: 'Sem 4', value: 14600000 },
  ];

  // Dados simulados para evolução mensal de pagamentos
  const monthlyPaymentsData = [
    { name: 'Jan', value: 42000000 },
    { name: 'Fev', value: 44000000 },
    { name: 'Mar', value: 46000000 },
    { name: 'Abr', value: 48000000 },
    { name: 'Mai', value: 50000000 },
    { name: 'Jun', value: 52000000 },
  ];

  // Dados simulados para evolução semanal de pagamentos
  const weeklyPaymentsData = [
    { name: 'Sem 1', value: 12800000 },
    { name: 'Sem 2', value: 13200000 },
    { name: 'Sem 3', value: 13800000 },
    { name: 'Sem 4', value: 12200000 },
  ];

  // Dados simulados para categorias de ativos
  const assetCategoriesData = [
    { name: 'Duplicatas', value: 180000000 },
    { name: 'Cheques', value: 85000000 },
    { name: 'Nota Comercial', value: 120000000 },
    { name: 'CRI', value: 95000000 },
    { name: 'CRA', value: 75000000 },
    { name: 'Outros', value: 45000000 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading issuers report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Emissores</h1>
          <p className="text-gray-600">Análise de risco de crédito e performance dos emissores de ativos</p>
        </div>

        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* Visão Geral do Emissor */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Visão Geral do Emissor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Total de Ativos Emitidos</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor total de ativos emitidos pelos emissores na plataforma</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="R$ 600M"
              subtitle="Acumulado"
              trend="up"
              trendValue="+8%"
              icon={<Building className="h-6 w-6" />}
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Total de Pagamentos</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor total de pagamentos efetuados pelos emissores</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="R$ 312M"
              subtitle="Acumulado"
              trend="up"
              trendValue="+12%"
              icon={<TrendingUp className="h-6 w-6" />}
              color="success"
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Volume em Aberto</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor atual de ativos em aberto aguardando pagamento</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="R$ 288M"
              subtitle="Posição atual"
              trend="up"
              trendValue="+5%"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="warning"
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Limite de Crédito</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Limite total de crédito aprovado para os emissores</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="R$ 750M"
              subtitle="Aprovado"
              icon={<Target className="h-6 w-6" />}
              color="primary"
            />
          </div>
        </div>

        {/* Indicadores de Risco */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Indicadores de Risco</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Taxa de Inadimplência</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentual de ativos em inadimplência</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="2.8%"
              subtitle="Este mês"
              trend="down"
              trendValue="-0.3%"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="success"
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Volume Inadimplente</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor total de ativos em inadimplência</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="R$ 8.1M"
              subtitle="Posição atual"
              trend="down"
              trendValue="-5%"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="danger"
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Prazo Médio dos Ativos</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Prazo médio de vencimento dos ativos emitidos</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="127 dias"
              subtitle="Média geral"
              trend="up"
              trendValue="+3 dias"
              icon={<Clock className="h-6 w-6" />}
              color="primary"
            />
            <KPICard
              title={
                <div className="flex items-center gap-2">
                  <span>Tempo Médio de Captação</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tempo médio para captação completa dos ativos</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              value="18 dias"
              subtitle="Média geral"
              trend="down"
              trendValue="-2 dias"
              icon={<TrendingUp className="h-6 w-6" />}
              color="success"
            />
          </div>
        </div>

        {/* Gráficos de Evolução de Emissões */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Evolução de Emissões</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Emissão de Ativos por Mês"
              type="bar"
              data={monthlyIssuanceData}
              height={350}
            />
            <ChartCard
              title="Emissão de Ativos por Semana"
              type="line"
              data={weeklyIssuanceData}
              height={350}
            />
          </div>
        </div>

        {/* Gráficos de Evolução de Pagamentos */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Evolução de Pagamentos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Pagamentos por Mês"
              type="bar"
              data={monthlyPaymentsData}
              height={350}
            />
            <ChartCard
              title="Pagamentos por Semana"
              type="line"
              data={weeklyPaymentsData}
              height={350}
            />
          </div>
        </div>

        {/* Distribuição por Categoria */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Distribuição por Categoria de Ativo</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Valor Emitido por Categoria"
              type="pie"
              data={assetCategoriesData}
              height={400}
            />
            <ChartCard
              title="Comparativo por Categoria"
              type="bar"
              data={assetCategoriesData}
              height={400}
            />
          </div>
        </div>

        {/* Resumo de Performance */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Resumo de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Utilização do Limite"
              value="38.4%"
              subtitle="R$ 288M / R$ 750M"
              color="primary"
            />
            <KPICard
              title="Taxa de Pagamento"
              value="97.2%"
              subtitle="Histórico"
              trend="up"
              trendValue="+0.3%"
              color="success"
            />
            <KPICard
              title="Crescimento Mensal"
              value="8.2%"
              subtitle="Emissões vs mês anterior"
              trend="up"
              trendValue="+1.5%"
              color="success"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Issuers;
