import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import usersRoutes from "./routes/Api/V1/Front/user.js"
import db from "./config/db.js"

dotenv.config()
const app = express();
const port = process.env.PORT || '3000';

// Koneksikan ke database
(async () => {
    try {
      await db.authenticate();
      console.log("✅ Database Connected!");
  
      // Sinkronisasi model dengan database
      await db.sync();
      console.log("✅ Tabel siap digunakan!");
    } catch (error) {
      console.error("❌ Database connection error:", error);
    }
})();

app.use(cors())
app.use(express.json())



app.use("/api/v1/users", usersRoutes)

app.get('/', (req, res) => {
    res.send("Selamat datang di express.js")
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
