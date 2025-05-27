
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface FilterSectionProps {
  timeFilter: string;
  onTimeFilterChange: (value: string) => void;
  assetFilter: string;
  onAssetFilterChange: (value: string) => void;
  onDownloadReport: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  timeFilter,
  onTimeFilterChange,
  assetFilter,
  onAssetFilterChange,
  onDownloadReport
}) => {
  return (
    <Card className="p-6 border-2 rounded-2xl shadow-sm bg-white">
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Período</label>
            <Select value={timeFilter} onValueChange={onTimeFilterChange}>
              <SelectTrigger className="w-[180px] rounded-xl">
                <SelectValue placeholder="Selecionar período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Hoje</SelectItem>
                <SelectItem value="month">Este Mês</SelectItem>
                <SelectItem value="year">Este Ano</SelectItem>
                <SelectItem value="custom">Período Customizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Ativo</label>
            <Select value={assetFilter} onValueChange={onAssetFilterChange}>
              <SelectTrigger className="w-[180px] rounded-xl">
                <SelectValue placeholder="Todos os ativos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Ativos</SelectItem>
                <SelectItem value="cdb">CDB</SelectItem>
                <SelectItem value="lci">LCI</SelectItem>
                <SelectItem value="lca">LCA</SelectItem>
                <SelectItem value="debenture">Debêntures</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Emissor</label>
            <Select>
              <SelectTrigger className="w-[180px] rounded-xl">
                <SelectValue placeholder="Todos os emissores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Emissores</SelectItem>
                <SelectItem value="bank1">Banco ABC</SelectItem>
                <SelectItem value="bank2">Banco XYZ</SelectItem>
                <SelectItem value="corp1">Empresa DEF</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={onDownloadReport}
          className="bg-zuvia-primary hover:bg-zuvia-primary/90 text-white rounded-xl px-6"
        >
          Download Relatório
        </Button>
      </div>
    </Card>
  );
};

export default FilterSection;
