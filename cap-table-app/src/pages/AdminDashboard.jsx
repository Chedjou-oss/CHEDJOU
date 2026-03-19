import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../components/ui/DataTable/DataTable';
import PieChart from '../components/ui/PieChart/PieChart';
import AppButton from '../components/ui/AppButton/AppButton';
import AppModal from '../components/ui/AppModal/AppModal';
import FormField from '../components/ui/FormField/FormField';

function AdminDashboard() {
  const [shareholders, setShareholders] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showIssuanceModal, setShowIssuanceModal] = useState(false);

  // Chargement des actionnaires depuis l'API
  useEffect(() => {
    const fetchShareholders = async () => {
      try {
        const response = await axios.get('/api/shareholders/');
        setShareholders(response.data);
      } catch (error) {
        console.error('Erreur fetch shareholders', error);
      }
    };
    fetchShareholders();
  }, []);

  // ----------------- Formulaire Ajouter Actionnaire -----------------
  function AddShareholderForm({ onClose, onAdded }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [shares, setShares] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/shareholders/', {
          name,
          email,
          shares: Number(shares),
        });
        onAdded(response.data); // mise à jour de la liste
        onClose();
      } catch (error) {
        console.error('Erreur ajout actionnaire', error);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <FormField label="Nom" value={name} onChange={e => setName(e.target.value)} />
        <FormField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <FormField
          label="Nombre d’actions"
          type="number"
          value={shares}
          onChange={e => setShares(e.target.value)}
        />
        <AppButton type="submit" label="Ajouter" />
      </form>
    );
  }

  // ----------------- Formulaire Émettre Actions -----------------
  function IssueSharesForm({ shareholders, onClose, onIssued }) {
    const [selectedId, setSelectedId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/issuances/', {
          shareholder_id: selectedId,
          quantity: Number(quantity),
        });
        onIssued(response.data); // mise à jour éventuelle
        onClose();
      } catch (error) {
        console.error('Erreur émission actions', error);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <FormField label="Actionnaire" type="select" value={selectedId} onChange={e => setSelectedId(e.target.value)}>
          <option value="">Sélectionner</option>
          {shareholders.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </FormField>
        <FormField
          label="Nombre d’actions"
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <AppButton type="submit" label="Émettre" />
      </form>
    );
  }

  // ----------------- Colonnes pour DataTable -----------------
  const columns = [
    { field: 'name', headerName: 'Nom' },
    { field: 'email', headerName: 'Email' },
    { field: 'shares', headerName: 'Actions' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        {/* Tableau des actionnaires */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Actionnaires</h2>
          <DataTable columns={columns} rows={shareholders} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <AppButton label="Ajouter un actionnaire" onClick={() => setShowAddModal(true)} />
            <AppButton label="Émettre des actions" onClick={() => setShowIssuanceModal(true)} />
          </div>
        </div>

        {/* Diagramme des parts */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Répartition des parts</h2>
          <PieChart data={shareholders.map(s => ({ name: s.name, value: s.shares }))} />
        </div>
      </div>

      {/* Modal Ajouter Actionnaire */}
      {showAddModal && (
        <AppModal title="Ajouter un actionnaire" onClose={() => setShowAddModal(false)}>
          <AddShareholderForm
            onClose={() => setShowAddModal(false)}
            onAdded={newShareholder => setShareholders([...shareholders, newShareholder])}
          />
        </AppModal>
      )}

      {/* Modal Émettre Actions */}
      {showIssuanceModal && (
        <AppModal title="Émettre des actions" onClose={() => setShowIssuanceModal(false)}>
          <IssueSharesForm
            shareholders={shareholders}
            onClose={() => setShowIssuanceModal(false)}
            onIssued={newIssuance => console.log('Émission créée :', newIssuance)}
          />
        </AppModal>
      )}
    </div>
  );
}

export default AdminDashboard;