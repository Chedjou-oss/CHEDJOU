import React from 'react';
import DataTable from './DataTable';

export default {
  title: 'UI/DataTable',
  component: DataTable,
};

const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'total_shares', headerName: 'Total Shares' },
];

const rows = [
  { id: 1, name: 'Alice', email: 'alice@test.com', total_shares: 100 },
  { id: 2, name: 'Bob', email: 'bob@test.com', total_shares: 200 },
];

export const Default = () => <DataTable columns={columns} rows={rows} />;