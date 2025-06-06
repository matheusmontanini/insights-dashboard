
import React, { useState } from 'react';
import { Search, Eye, Filter, Download, UserCheck, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  registrationDate: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  totalInvested: number;
  accountBalance: number;
  lastAccess: string;
}

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Dados simulados de clientes
  const customers: Customer[] = [
    {
      id: '001',
      name: 'João Silva Santos',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-1234',
      cpf: '123.456.789-00',
      registrationDate: '2024-01-15',
      status: 'Ativo',
      totalInvested: 150000,
      accountBalance: 25000,
      lastAccess: '2024-06-05'
    },
    {
      id: '002',
      name: 'Maria Oliveira Costa',
      email: 'maria.oliveira@email.com',
      phone: '(11) 98888-5678',
      cpf: '987.654.321-00',
      registrationDate: '2024-02-20',
      status: 'Ativo',
      totalInvested: 85000,
      accountBalance: 12000,
      lastAccess: '2024-06-06'
    },
    {
      id: '003',
      name: 'Carlos Eduardo Lima',
      email: 'carlos.lima@email.com',
      phone: '(11) 97777-9012',
      cpf: '456.789.123-00',
      registrationDate: '2024-03-10',
      status: 'Pendente',
      totalInvested: 0,
      accountBalance: 5000,
      lastAccess: '2024-06-01'
    },
    {
      id: '004',
      name: 'Ana Paula Ferreira',
      email: 'ana.ferreira@email.com',
      phone: '(11) 96666-3456',
      cpf: '789.123.456-00',
      registrationDate: '2024-01-30',
      status: 'Ativo',
      totalInvested: 220000,
      accountBalance: 45000,
      lastAccess: '2024-06-06'
    },
    {
      id: '005',
      name: 'Roberto Santos Alves',
      email: 'roberto.alves@email.com',
      phone: '(11) 95555-7890',
      cpf: '321.654.987-00',
      registrationDate: '2024-04-05',
      status: 'Inativo',
      totalInvested: 35000,
      accountBalance: 8000,
      lastAccess: '2024-05-20'
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.cpf.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
        return 'text-green-600 bg-green-100';
      case 'Inativo':
        return 'text-red-600 bg-red-100';
      case 'Pendente':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zuvia-primary mb-2">Clientes</h1>
          <p className="text-gray-600">Gestão e visualização de cadastros de clientes</p>
        </div>
        <Button className="bg-zuvia-primary hover:bg-zuvia-primary/90">
          <Download className="h-4 w-4 mr-2" />
          Exportar Lista
        </Button>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <UserCheck className="h-4 w-4 text-zuvia-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zuvia-primary">{customers.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.status === 'Ativo').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <UserCheck className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {customers.filter(c => c.status === 'Pendente').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume Total Investido</CardTitle>
            <UserCheck className="h-4 w-4 text-zuvia-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zuvia-primary">
              {formatCurrency(customers.reduce((sum, c) => sum + c.totalInvested, 0))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Buscar por nome, email ou CPF</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Digite para buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:w-48">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zuvia-primary"
              >
                <option value="all">Todos</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Pendente">Pendente</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Clientes */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes ({filteredCustomers.length})</CardTitle>
          <CardDescription>
            Visualize e gerencie todos os clientes cadastrados na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Investido</TableHead>
                <TableHead>Saldo em Conta</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell>{formatCurrency(customer.totalInvested)}</TableCell>
                  <TableCell>{formatCurrency(customer.accountBalance)}</TableCell>
                  <TableCell>{formatDate(customer.lastAccess)}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedCustomer(customer)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Detalhes do Cliente</DialogTitle>
                          <DialogDescription>
                            Informações completas do cliente selecionado
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedCustomer && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-500">Nome Completo</Label>
                                <p className="text-lg font-semibold">{selectedCustomer.name}</p>
                              </div>
                              
                              <div>
                                <Label className="text-sm font-medium text-gray-500">CPF</Label>
                                <p className="text-lg">{selectedCustomer.cpf}</p>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <div>
                                  <Label className="text-sm font-medium text-gray-500">Email</Label>
                                  <p>{selectedCustomer.email}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <div>
                                  <Label className="text-sm font-medium text-gray-500">Telefone</Label>
                                  <p>{selectedCustomer.phone}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-500">Status</Label>
                                <p>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCustomer.status)}`}>
                                    {selectedCustomer.status}
                                  </span>
                                </p>
                              </div>
                              
                              <div>
                                <Label className="text-sm font-medium text-gray-500">Total Investido</Label>
                                <p className="text-lg font-semibold text-green-600">
                                  {formatCurrency(selectedCustomer.totalInvested)}
                                </p>
                              </div>
                              
                              <div>
                                <Label className="text-sm font-medium text-gray-500">Saldo em Conta</Label>
                                <p className="text-lg font-semibold">
                                  {formatCurrency(selectedCustomer.accountBalance)}
                                </p>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <div>
                                  <Label className="text-sm font-medium text-gray-500">Data de Cadastro</Label>
                                  <p>{formatDate(selectedCustomer.registrationDate)}</p>
                                </div>
                              </div>
                              
                              <div>
                                <Label className="text-sm font-medium text-gray-500">Último Acesso</Label>
                                <p>{formatDate(selectedCustomer.lastAccess)}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
