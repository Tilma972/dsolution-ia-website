import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, BarChart3, PieChart as PieChartIcon, RotateCcw } from "lucide-react";

// Définition de l'interface pour les données d'analytique
interface ClickData {
  [trackingId: string]: number;
}

// Couleurs pour les graphiques
const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#6366F1', '#84CC16'];

// Composant principal de tableau de bord d'analytique WhatsApp
export const WhatsAppAnalytics: React.FC = () => {
  const [clickData, setClickData] = useState<ClickData>({});
  const [viewType, setViewType] = useState<'bar' | 'pie'>('bar');
  
  useEffect(() => {
    loadData();
  }, []);
  
  // Charger les données depuis le localStorage
  const loadData = () => {
    try {
      const storedData = localStorage.getItem('whatsapp_cta_clicks') || '{}';
      setClickData(JSON.parse(storedData));
    } catch (error) {
      console.error('Error loading WhatsApp analytics data:', error);
      setClickData({});
    }
  };
  
  // Réinitialiser les données
  const resetData = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser toutes les données de suivi WhatsApp ?')) {
      localStorage.setItem('whatsapp_cta_clicks', '{}');
      setClickData({});
    }
  };
  
  // Télécharger les données au format CSV
  const downloadCSV = () => {
    const headers = ['Point d\'entrée', 'Nombre de clics'];
    const dataRows = Object.entries(clickData).map(([id, clicks]) => [formatTrackingId(id), clicks]);
    
    const csvContent = [
      headers.join(','),
      ...dataRows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `whatsapp_analytics_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Formater les identifiants de suivi pour qu'ils soient plus lisibles
  const formatTrackingId = (id: string): string => {
    return id
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Préparer les données pour les graphiques
  const prepareChartData = () => {
    return Object.entries(clickData).map(([id, clicks], index) => ({
      name: formatTrackingId(id),
      clicks,
      color: COLORS[index % COLORS.length]
    }));
  };
  
  const chartData = prepareChartData();
  
  // S'il n'y a pas de données
  if (Object.keys(clickData).length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Suivi des Conversions WhatsApp</CardTitle>
          <CardDescription>
            Aucune donnée disponible. Les statistiques apparaîtront lorsque les visiteurs commenceront à cliquer sur vos boutons WhatsApp.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Suivi des Conversions WhatsApp</CardTitle>
            <CardDescription>
              Visualisez l'efficacité des différents points d'entrée WhatsApp sur votre site.
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setViewType('bar')}>
              <BarChart3 className="h-4 w-4 mr-1" />
              Barres
            </Button>
            <Button variant="outline" size="sm" onClick={() => setViewType('pie')}>
              <PieChartIcon className="h-4 w-4 mr-1" />
              Camembert
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="h-80">
        {viewType === 'bar' ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="clicks" name="Nombre de clics">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="clicks"
                nameKey="name"
                label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value} clics`, 'Nombre de clics']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={loadData}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Actualiser
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={downloadCSV}>
            <ArrowDownToLine className="h-4 w-4 mr-2" />
            Exporter CSV
          </Button>
          <Button variant="destructive" onClick={resetData}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Réinitialiser
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Composant de tableau détaillé des clics
export const WhatsAppClickTable: React.FC = () => {
  const [clickData, setClickData] = useState<ClickData>({});
  
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('whatsapp_cta_clicks') || '{}';
      setClickData(JSON.parse(storedData));
    } catch (error) {
      console.error('Error loading WhatsApp analytics data:', error);
    }
  }, []);
  
  const formatTrackingId = (id: string): string => {
    return id
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const totalClicks = Object.values(clickData).reduce((sum, clicks) => sum + clicks, 0);
  
  // S'il n'y a pas de données
  if (Object.keys(clickData).length === 0) {
    return null;
  }
  
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Détail des conversions WhatsApp</CardTitle>
        <CardDescription>
          Analyse détaillée des clics par point d'entrée
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-2 text-left font-medium">Point d'entrée</th>
                <th className="p-2 text-center font-medium">Nombre de clics</th>
                <th className="p-2 text-center font-medium">Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(clickData).map(([id, clicks], index) => (
                <tr key={id} className={index % 2 ? "bg-muted/20" : ""}>
                  <td className="p-2">{formatTrackingId(id)}</td>
                  <td className="p-2 text-center">{clicks}</td>
                  <td className="p-2 text-center">
                    {((clicks / totalClicks) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t bg-muted/50 font-medium">
                <td className="p-2">Total</td>
                <td className="p-2 text-center">{totalClicks}</td>
                <td className="p-2 text-center">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
