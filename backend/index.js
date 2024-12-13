import express from "express";
import path from "path";
import Router from "./routes/routes.js";
import dotenv from "dotenv";

const __dirname = import.meta.dirname;

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", Router);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

export default app;
