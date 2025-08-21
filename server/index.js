import cors from "cors"
import "dotenv/config"
import express from "express"
import connectDB from "./config/dbConn.js"
import dalleRoutes from "./routes/dalleRoutes.js"
import postRoutes from "./routes/postRoutes.js"

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.use("/api/dalle", postRoutes)
app.use("/api/dalle", dalleRoutes)

app.get("/", (req, res) => {
  res.send("Hello from DALL-E")
})

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
