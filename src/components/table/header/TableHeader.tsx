import { TableCell, TableHead, TableRow } from "@mui/material";

export function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Username</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Address</TableCell>
        <TableCell align="right">Phone</TableCell>
      </TableRow>
    </TableHead>
  );
}
