import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { User } from "../types";

type Props = {
  users: User[];
};

const Tabel = ({ users }: Props) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { lg: "500px", md: "450px", sm: "500px", xs: "320px" },
        p: "16px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">email</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">number</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell>{row.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabel;
