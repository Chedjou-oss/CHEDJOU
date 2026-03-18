import React from 'react';
import DashboardLayout from './DashboardLayout';
import AppCard from '../../components/ui/AppCard/AppCard';
import AppButton from '../../components/ui/AppButton/AppButton';

export default {
  title: 'Layouts/DashboardLayout',
  component: DashboardLayout,
};

export const Default = () => (
  <DashboardLayout title="Admin Dashboard">
    {/* Exemple de cartes */}
    <AppCard title="Total Actionnaires">
      <p>Nombre total : 5</p>
      <AppButton label="Voir tous" />
    </AppCard>

    <AppCard title="Émissions d'actions">
      <p>Actions récentes : 120</p>
      <AppButton label="Voir le détail" variant="outlined" />
    </AppCard>

    <AppCard title="Graphique de répartition">
      <p>Ici pourrait être le PieChart</p>
    </AppCard>
  </DashboardLayout>
);