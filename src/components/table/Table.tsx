import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { getUsers } from "../../apis/getUsers";
import { User } from "../../models/user.model";
import {AddUser} from "../add-user/AddUser" 
<AddUser></AddUser>;
import { TableHeader } from "./header/TableHeader";

export function CrudTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <div>
      {" "}
      <AddUser/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.address.street}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">
                  <Button variant="contained">Edit</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
