
import React, { useState } from 'react';
import { Building2, Users, TrendingUp, DollarSign, Shield, AlertTriangle } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import ChartCard from '@/components/dashboard/ChartCard';
import StatusTable from '@/components/dashboard/StatusTable';

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

  // Dados da tabela de compliance
  const complianceData = [
    {
      id: '1',
      name: 'João Silva',
      status: 'success',
      value: 'R$ 150.000',
      details: 'KYC Aprovado'
    },
    {
      id: '2',
      name: 'Maria Santos',
      status: 'pending',
      value: 'R$ 75.000',
      details: 'Documentos Pendentes'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      status: 'warning',
      value: 'R$ 120.000',
      details: 'Em Análise PLD'
    },
    {
      id: '4',
      name: 'Ana Oliveira',
      status: 'danger',
      value: 'R$ 200.000',
      details: 'Transação Suspeita'
    },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading report...');
  };

  return (
    <div className="min-h-screen bg-zuvia-gray">
      {/* Header */}
      <header className="bg-white border-b-2 border-zuvia-gray-light shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zuvia-primary rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-zuvia-primary">Zuvia</h1>
                <p className="text-sm text-gray-600">Dashboard de Investimentos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Última atualização</p>
              <p className="text-sm font-medium text-zuvia-primary">
                {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
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
            title="Contas Abertas"
            value="2.347"
            subtitle="Este mês"
            trend="up"
            trendValue="+12%"
            icon={<Users className="h-6 w-6" />}
          />
          <KPICard
            title="Contas Ativas"
            value="1.856"
            subtitle="≥ R$ 1.000"
            trend="up"
            trendValue="+8%"
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

        {/* Seção de Contas de Investidores */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Visão de Contas de Investidores</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Evolução de Contas (Abertas vs Ativas)"
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
                title="Ticket Médio"
                value="R$ 15.750"
                subtitle="Por conta ativa"
                trend="up"
                trendValue="+5%"
              />
            </div>
          </div>
        </div>

        {/* Captação e Performance */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Captação e Performance dos Ativos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Evolução da Captação Mensal"
              type="bar"
              data={captationData}
              height={350}
            />
            <ChartCard
              title="Concentração de Risco por Emissor"
              type="pie"
              data={riskConcentrationData}
              height={350}
            />
          </div>
        </div>

        {/* Receita */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Receita e Saúde Financeira</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Receita por Fonte"
              type="pie"
              data={revenueData}
              height={350}
            />
            <div className="space-y-4">
              <KPICard
                title="Margem de Lucro"
                value="34.2%"
                subtitle="Margem operacional"
                trend="up"
                trendValue="+2.1%"
                color="success"
              />
              <KPICard
                title="ROI Médio dos Ativos"
                value="12.8%"
                subtitle="Retorno anualizado"
                trend="up"
                trendValue="+0.5%"
                color="success"
              />
            </div>
          </div>
        </div>

        {/* Performance e Alertas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zuvia-primary">Performance dos Ativos</h2>
            <div className="grid grid-cols-2 gap-4">
              <KPICard
                title="Prazo Médio"
                value="18 meses"
                subtitle="Vencimento médio"
                color="primary"
              />
              <KPICard
                title="Taxa de Inadimplência"
                value="1.2%"
                subtitle="Histórico 12 meses"
                trend="down"
                trendValue="-0.3%"
                color="success"
              />
            </div>
            <KPICard
              title="Ativos com Atraso"
              value="3"
              subtitle="Requer atenção"
              trend="neutral"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="warning"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-zuvia-primary mb-4">Compliance e Monitoramento</h2>
            <div className="space-y-4">
              <KPICard
                title="Transações Alto Valor"
                value="127"
                subtitle="Acima de R$ 50k (este mês)"
                icon={<Shield className="h-6 w-6" />}
                color="warning"
              />
              <div className="grid grid-cols-3 gap-2">
                <KPICard
                  title="KYC Aprovados"
                  value="1.845"
                  color="success"
                />
                <KPICard
                  title="Pendentes"
                  value="156"
                  color="warning"
                />
                <KPICard
                  title="Reprovados"
                  value="23"
                  color="danger"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Compliance */}
        <StatusTable
          title="Monitoramento de Compliance - Transações Recentes"
          data={complianceData}
        />

        {/* Alertas COAF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KPICard
            title="Volume Reportado COAF"
            value="R$ 2.8M"
            subtitle="Este mês"
            icon={<Shield className="h-6 w-6" />}
            color="primary"
          />
          <KPICard
            title="Alertas PLD/FT"
            value="7"
            subtitle="Transações suspeitas identificadas"
            trend="neutral"
            icon={<AlertTriangle className="h-6 w-6" />}
            color="danger"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
