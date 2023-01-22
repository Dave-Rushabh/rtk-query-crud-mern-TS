import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Users = {
  _id: number;
  fname: string;
  lname: string;
};

type Props = {
  data: Users[];
};

const BasicTable = ({ data }: Props) => {
  const rows = data;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ maxWidth: 650, margin: 'auto' }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.fname}</TableCell>
              <TableCell>{row.lname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
