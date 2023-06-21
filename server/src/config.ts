import dotenv from "dotenv";
import fs from "node:fs";

const configPath = ".env";

if (process.env.NODE_ENV === "dev") {
  const buffer = fs.readFileSync(configPath);
  const config = dotenv.parse(buffer);
  for (const key in config) {
    process.env[key] = config[key];
  }
}
export const PORT = Number(process.env.PORT);
export const TIMEOUT = Number(process.env.TIMEOUT);
