
import React, { useState, useEffect } from 'react';
import { Building2, TrendingUp, TrendingDown, DollarSign, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TVDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualizar o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Dados simulados que seriam atualizados em tempo real
  const [liveData, setLiveData] = useState({
    totalAssets: 127500000,
    deposits: 23500000,
    withdrawals: 4800000,
    totalInvested: 149800000,
    transactions: [
      { id: 1, type: 'deposit', amount: 50000, time: '14:35:12', client: 'João Silva' },
      { id: 2, type: 'withdrawal', amount: 25000, time: '14:33:45', client: 'Maria Santos' },
      { id: 3, type: 'investment', amount: 100000, time: '14:32:18', client: 'Carlos Oliveira' },
      { id: 4, type: 'deposit', amount: 75000, time: '14:30:55', client: 'Ana Costa' },
      { id: 5, type: 'investment', amount: 200000, time: '14:28:33', client: 'Pedro Lima' },
      { id: 6, type: 'withdrawal', amount: 30000, time: '14:27:12', client: 'Lucia Ferreira' },
      { id: 7, type: 'deposit', amount: 125000, time: '14:25:48', client: 'Roberto Alves' },
      { id: 8, type: 'investment', amount: 85000, time: '14:23:21', client: 'Fernanda Rocha' }
    ]
  });

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        totalAssets: prev.totalAssets + Math.floor(Math.random() * 100000) - 50000,
        deposits: prev.deposits + Math.floor(Math.random() * 50000),
        withdrawals: prev.withdrawals + Math.floor(Math.random() * 20000),
        totalInvested: prev.totalInvested + Math.floor(Math.random() * 80000),
        transactions: [
          {
            id: Date.now(),
            type: ['deposit', 'withdrawal', 'investment'][Math.floor(Math.random() * 3)],
            amount: Math.floor(Math.random() * 200000) + 10000,
            time: new Date().toLocaleTimeString('pt-BR'),
            client: ['Cliente A', 'Cliente B', 'Cliente C', 'Cliente D'][Math.floor(Math.random() * 4)]
          },
          ...prev.transactions.slice(0, 7)
        ]
      }));
    }, 5000); // Atualizar a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <TrendingUp className="h-8 w-8 text-green-500" />;
      case 'withdrawal':
        return <TrendingDown className="h-8 w-8 text-red-500" />;
      case 'investment':
        return <DollarSign className="h-8 w-8 text-blue-500" />;
      default:
        return <DollarSign className="h-8 w-8 text-gray-500" />;
    }
  };

  const getTransactionLabel = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'Depósito';
      case 'withdrawal':
        return 'Saque';
      case 'investment':
        return 'Investimento';
      default:
        return 'Transação';
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'border-green-200 bg-green-50';
      case 'withdrawal':
        return 'border-red-200 bg-red-50';
      case 'investment':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zuvia-primary/10 via-white to-zuvia-primary/5 p-8">
      {/* Header com logo e data/hora */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-zuvia-primary rounded-2xl flex items-center justify-center">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-zuvia-primary">Zuvia</h1>
            <p className="text-xl text-gray-600">Dashboard em Tempo Real</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-4xl font-mono font-bold text-zuvia-primary">
            {currentTime.toLocaleTimeString('pt-BR')}
          </div>
          <div className="text-xl text-gray-600">
            {currentTime.toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* KPIs Principais */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 border-2 border-zuvia-primary/20 bg-gradient-to-br from-zuvia-primary/5 to-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-700">Patrimônio Total</h3>
                <Building2 className="h-12 w-12 text-zuvia-primary" />
              </div>
              <p className="text-5xl font-bold text-zuvia-primary mb-2">
                {formatCurrency(liveData.totalAssets)}
              </p>
              <p className="text-lg text-gray-600">Volume sob gestão</p>
            </Card>

            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-700">Depósitos</h3>
                <TrendingUp className="h-12 w-12 text-green-600" />
              </div>
              <p className="text-5xl font-bold text-green-600 mb-2">
                {formatCurrency(liveData.deposits)}
              </p>
              <p className="text-lg text-gray-600">Hoje</p>
            </Card>

            <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-700">Saques</h3>
                <TrendingDown className="h-12 w-12 text-red-600" />
              </div>
              <p className="text-5xl font-bold text-red-600 mb-2">
                {formatCurrency(liveData.withdrawals)}
              </p>
              <p className="text-lg text-gray-600">Hoje</p>
            </Card>

            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-700">Total Investido</h3>
                <DollarSign className="h-12 w-12 text-blue-600" />
              </div>
              <p className="text-5xl font-bold text-blue-600 mb-2">
                {formatCurrency(liveData.totalInvested)}
              </p>
              <p className="text-lg text-gray-600">Acumulado</p>
            </Card>
          </div>
        </div>

        {/* Transações em Tempo Real */}
        <div className="lg:col-span-1">
          <Card className="p-6 border-2 border-zuvia-primary/20 bg-white h-full">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="h-8 w-8 text-zuvia-primary" />
              <h3 className="text-2xl font-bold text-zuvia-primary">Transações Recentes</h3>
            </div>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {liveData.transactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className={`p-4 rounded-xl border-2 ${getTransactionColor(transaction.type)} transition-all duration-300 hover:scale-102`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getTransactionIcon(transaction.type)}
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {getTransactionLabel(transaction.type)}
                        </p>
                        <p className="text-sm text-gray-600">{transaction.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">
                        {formatCurrency(transaction.amount)}
                      </p>
                      <p className="text-sm text-gray-600 font-mono">
                        {transaction.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Indicador de atualização automática */}
      <div className="fixed bottom-4 right-4">
        <div className="flex items-center space-x-2 bg-zuvia-primary text-white px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Atualizando automaticamente</span>
        </div>
      </div>
    </div>
  );
};

export default TVDashboard;
