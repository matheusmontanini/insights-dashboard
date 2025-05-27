
import React, { useState } from 'react';
import { Users, TrendingUp, Target, Info } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Accounts = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

  // Dados simulados para evolução mensal
  const monthlyAccountsEvolution = [
    { name: 'Jan', abertas: 1850, ativas: 1420, ativadas: 1156 },
    { name: 'Fev', abertas: 1950, ativas: 1520, ativadas: 1234 },
    { name: 'Mar', abertas: 2080, ativas: 1630, ativadas: 1325 },
    { name: 'Abr', abertas: 2180, ativas: 1720, ativadas: 1410 },
    { name: 'Mai', abertas: 2280, ativas: 1810, ativadas: 1485 },
    { name: 'Jun', abertas: 2347, ativas: 1856, ativadas: 1623 },
  ];

  // Dados simulados para evolução diária (últimos 30 dias)
  const dailyAccountsEvolution = [
    { name: '1', abertas: 15, ativas: 12, ativadas: 8 },
    { name: '2', abertas: 18, ativas: 14, ativadas: 11 },
    { name: '3', abertas: 12, ativas: 9, ativadas: 7 },
    { name: '4', abertas: 22, ativas: 17, ativadas: 13 },
    { name: '5', abertas: 25, ativas: 19, ativadas: 15 },
    { name: '6', abertas: 19, ativas: 15, ativadas: 12 },
    { name: '7', abertas: 16, ativas: 13, ativadas: 10 },
    { name: '8', abertas: 21, ativas: 16, ativadas: 12 },
    { name: '9', abertas: 23, ativas: 18, ativadas: 14 },
    { name: '10', abertas: 17, ativas: 13, ativadas: 11 },
    { name: '11', abertas: 20, ativas: 15, ativadas: 12 },
    { name: '12', abertas: 24, ativas: 19, ativadas: 15 },
    { name: '13', abertas: 18, ativas: 14, ativadas: 11 },
    { name: '14', abertas: 26, ativas: 20, ativadas: 16 },
    { name: '15', abertas: 22, ativas: 17, ativadas: 13 },
  ];

  const activationRateData = [
    { name: 'Jan', value: 62.5 },
    { name: 'Fev', value: 63.3 },
    { name: 'Mar', value: 63.7 },
    { name: 'Abr', value: 64.7 },
    { name: 'Mai', value: 65.1 },
    { name: 'Jun', value: 69.2 },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading accounts report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Gestão de Contas</h1>
          <p className="text-gray-600">Análise detalhada das contas de investidores</p>
        </div>

        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs de Contas */}
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
            title={
              <div className="flex items-center gap-2">
                <span>Taxa de Ativação</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentual de contas abertas que se tornaram ativadas</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            }
            value="69.2%"
            subtitle="Este mês"
            trend="up"
            trendValue="+4.1%"
            icon={<Target className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Gráficos de Evolução Mensal */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Evolução Mensal</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Evolução Mensal de Contas"
              type="line"
              data={monthlyAccountsEvolution.map(item => ({
                name: item.name,
                'Abertas': item.abertas,
                'Ativas': item.ativas,
                'Ativadas': item.ativadas
              }))}
              height={350}
            />
            <ChartCard
              title="Taxa de Ativação Mensal (%)"
              type="line"
              data={activationRateData}
              height={350}
            />
          </div>
        </div>

        {/* Gráficos de Evolução Diária */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Evolução Diária (Últimos 15 dias)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Novas Contas Diárias"
              type="bar"
              data={dailyAccountsEvolution.map(item => ({
                name: `Dia ${item.name}`,
                'Abertas': item.abertas,
                'Ativas': item.ativas,
                'Ativadas': item.ativadas
              }))}
              height={350}
            />
            <ChartCard
              title="Comparativo Diário (Barras Empilhadas)"
              type="bar"
              data={dailyAccountsEvolution.slice(0, 10).map(item => ({
                name: `Dia ${item.name}`,
                value: item.abertas + item.ativas + item.ativadas
              }))}
              height={350}
            />
          </div>
        </div>

        {/* Resumo Estatístico */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Resumo Estatístico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Média de Contas/Dia"
              value="19.8"
              subtitle="Últimos 30 dias"
              color="primary"
            />
            <KPICard
              title="Pico de Ativações"
              value="26"
              subtitle="Dia 14 deste mês"
              color="success"
            />
            <KPICard
              title="Conversão Total"
              value="87.4%"
              subtitle="Abertas → Ativas"
              trend="up"
              trendValue="+2.1%"
              color="success"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Accounts;
