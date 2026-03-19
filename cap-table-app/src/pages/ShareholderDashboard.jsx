import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppCard from '../components/ui/AppCard/AppCard';
import DataTable from '../components/ui/DataTable/DataTable';

function ShareholderDashboard({ userId }) {
  const [totalShares, setTotalShares] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axios.get(`/api/shareholders/${userId}/`);
        setTotalShares(response.data.total_shares);
      } catch (error) {
        console.error('Erreur total actions', error);
      }
    };
    fetchTotal();
  }, [userId]);

  const [issuances, setIssuances] = useState([]);

  useEffect(() => {
    const fetchIssuances = async () => {
      try {
        const response = await axios.get('/api/issuances/');
        setIssuances(response.data);
      } catch (error) {
        console.error('Erreur fetch émissions', error);
      }
    };
    fetchIssuances();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'quantity', headerName: 'Actions' },
    { field: 'date', headerName: 'Date' },
    {
      field: 'certificate',
      headerName: 'Certificat',
      renderCell: (row) => (
        <a href={`/api/issuances/${row.id}/certificate/`} target="_blank" rel="noreferrer">
          Télécharger
        </a>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shareholder Dashboard</h1>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Carte TotalShares */}
        <div style={{ flex: '1 1 200px' }}>
          <AppCard title="Total Actions" content={totalShares} />
        </div>

        {/* Liste des émissions */}
        <div style={{ flex: '2 1 400px' }}>
          <h2>Liste des émissions</h2>
          <DataTable columns={columns} rows={issuances} />
        </div>
      </div>
    </div>
  );
}

export default ShareholderDashboard;