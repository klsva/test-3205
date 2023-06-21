import { PORT } from "./config";
import app from "./app";

process.on("SIGINT", (): void => {
  // Gracefully stop all the services
  app.stop();
  process.exit(0);
});

process.on("SIGTERM", (): void => {
  // Gracefully stop all the services
  app.stop();
  process.exit(0);
});

process.on("unhandledRejection", (error, p): void => {
  console.error(error, "Unhandled Rejection at Promise", p);
});

process.on("uncaughtException", (error): void => {
  console.error(error);
  app.stop();
  process.exit(1);
});

// await untill all the staff started and run
app.start(PORT);
