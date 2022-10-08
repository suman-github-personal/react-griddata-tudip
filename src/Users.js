import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'First name' },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'email',
    headerName: 'Email Address',
    sortable: false,
    width: 200,
  }
];

const rows = [
  { id: 1, firstName: 'Suman', lastName: 'Kushwaha', email: "user1@gmail.com" },
  { id: 2, firstName: 'Suhani', lastName: 'Kushwaha',email: "user1@gmail.com"},
  { id: 3, firstName: 'Vivek', lastName: 'Kushwaha',email: "user1@gmail.com" },
  { id: 4, firstName: 'Udit', lastName: 'Kushwaha',email: "user1@gmail.com" },
  { id: 5, firstName: 'Prisha', lastName: 'Kushwaha',email: "user1@gmail.com"},
  { id: 6, firstName: 'Sonam', lastName: 'Kushwaha',email: "user1@gmail.com"},
  { id: 7, firstName: 'Guddan', lastName: 'Kushwaha',email: "user1@gmail.com" },
 
];

export default function Users() {
  return (
    <Box sx={{ height: 400, width: '40%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
