import { Box, Typography } from "@mui/material";
import { useState } from "react";
import APIService from "./API/api-service";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Table from "./components/Table";
import { User } from "./types";

export const defaultUsers: User[] = [];
export const defaultUser: User = { email: "", number: "" };

function App() {
  const [users, setUsers]: [User[], (users: User[]) => void] =
    useState(defaultUsers);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(false);
  const [message, setMessage]: [string, (message: string) => void] =
    useState<string>("");
  const [status, setStatus]: [number, (status: number) => void] =
    useState<number>(0);

  //get users data
  const getUsers = async (userData: User): Promise<any> => {
    setLoading(true);
    const result = await APIService.get(userData);
    if (result.status !== 200) {
      setMessage(result.message);
      setLoading(false);
    } else {
      setUsers(result.data);
      setStatus(result.status);
      setLoading(false);
    }
  };
  return (
    <Box className="app">
      <Box sx={{ flexGrow: 1 }}>
        {/**Topbar */}
        <Appbar />
        <main>
          {/**Search Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              m: "16px",
            }}
          >
            <Form getData={getUsers} />
          </Box>
          {/** List of data */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              m: "16px",
            }}
          >
            {loading ? (
              <Loader />
            ) : users.length > 0 ? (
              <Table users={users} />
            ) : users.length === 0 && status === 200 ? (
              <Box>
                <Typography variant="body1">
                  Can not find data. Check your request.
                </Typography>
              </Box>
            ) : message ? (
              message
            ) : (
              <Box>
                <Typography variant="body1">Results will be here.</Typography>
              </Box>
            )}
          </Box>
        </main>
      </Box>
    </Box>
  );
}

export default App;
