import express, { Express } from "express";
import http from "http";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use("/", routes);

const httpServer = http.createServer(router);
httpServer.listen(process.env.PORT ?? 3000, () =>
  console.log("The server is running")
);
