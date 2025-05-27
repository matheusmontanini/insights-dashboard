
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full bg-zuvia-gray">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b-2 border-zuvia-gray-light shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <SidebarTrigger />
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

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
