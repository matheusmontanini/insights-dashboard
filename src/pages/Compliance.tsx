
import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import FilterSection from '@/components/dashboard/FilterSection';
import StatusTable from '@/components/dashboard/StatusTable';
import { TooltipProvider } from '@/components/ui/tooltip';

const Compliance = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [assetFilter, setAssetFilter] = useState('all');

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
    {
      id: '5',
      name: 'Carlos Lima',
      status: 'success' as const,
      value: 'R$ 95.000',
      details: 'Documentos Validados'
    },
  ];

  const handleDownloadReport = () => {
    console.log('Downloading compliance report...');
  };

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Compliance e Monitoramento</h1>
          <p className="text-gray-600">Controle de conformidade e prevenção à lavagem de dinheiro</p>
        </div>

        <FilterSection
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          assetFilter={assetFilter}
          onAssetFilterChange={setAssetFilter}
          onDownloadReport={handleDownloadReport}
        />

        {/* KPIs de Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Transações Alto Valor"
            value="127"
            subtitle="Acima de R$ 50k (este mês)"
            icon={<Shield className="h-6 w-6" />}
            color="warning"
          />
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
          <KPICard
            title="Taxa de Aprovação KYC"
            value="92.5%"
            subtitle="Aprovações automáticas"
            trend="up"
            trendValue="+2.1%"
            icon={<CheckCircle className="h-6 w-6" />}
            color="success"
          />
        </div>

        {/* Status KYC */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Status KYC/KYP</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <KPICard
              title="KYC Aprovados"
              value="1.845"
              subtitle="Documentos validados"
              icon={<CheckCircle className="h-6 w-6" />}
              color="success"
            />
            <KPICard
              title="Pendentes"
              value="156"
              subtitle="Aguardando documentos"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="warning"
            />
            <KPICard
              title="Reprovados"
              value="23"
              subtitle="Não conformes"
              icon={<XCircle className="h-6 w-6" />}
              color="danger"
            />
            <KPICard
              title="Em Análise"
              value="89"
              subtitle="Revisão manual"
              icon={<Shield className="h-6 w-6" />}
              color="primary"
            />
          </div>
        </div>

        {/* Monitoramento PLD */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Prevenção à Lavagem de Dinheiro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Operações Estruturadas"
              value="12"
              subtitle="Identificadas este mês"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="warning"
            />
            <KPICard
              title="CPFs Consultados Bacen"
              value="1.543"
              subtitle="Verificações realizadas"
              icon={<Shield className="h-6 w-6" />}
              color="primary"
            />
            <KPICard
              title="ROCs Enviados"
              value="15"
              subtitle="Relatórios ao COAF"
              icon={<Shield className="h-6 w-6" />}
              color="primary"
            />
          </div>
        </div>

        {/* Tabela de Monitoramento */}
        <StatusTable
          title="Monitoramento de Compliance - Transações Recentes"
          data={complianceData}
        />

        {/* Indicadores de Risco */}
        <div>
          <h2 className="text-xl font-bold text-zuvia-primary mb-4">Indicadores de Risco</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <KPICard
              title="Score de Risco Médio"
              value="2.3"
              subtitle="Escala 1-5 (baixo-alto)"
              trend="down"
              trendValue="-0.2"
              color="success"
            />
            <KPICard
              title="Clientes PEP"
              value="34"
              subtitle="Pessoas expostas politicamente"
              icon={<AlertTriangle className="h-6 w-6" />}
              color="warning"
            />
            <KPICard
              title="Última Auditoria"
              value="98.5%"
              subtitle="Score de conformidade"
              trend="up"
              trendValue="+1.2%"
              color="success"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Compliance;
