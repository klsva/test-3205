import express, { Application } from "express";
import cors from "cors";
import { Server } from "node:http";
import apiRouter from "./routes";

const app: Application = express();
let server: Server;

app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

export default {
  async start(port: number): Promise<Server> {
    server = app.listen(port, () => {
      console.log(`Server is listening on ${port} port`);
    });
    return server;
  },
  async stop(cb?: (err?: Error) => void): Promise<Server> {
    console.log(`\nTrying to close the server..\n`);
    return server.close(cb);
  },
};
