require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes");
const requestRoutes = require("./routes/requestRoutes");
const authRoutes = require("./routes/authRoutes");
const callRoutes = require("./routes/callRoutes");



const app = express()



app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", callRoutes);

mongoose.connect(process.env.MONGO_URL, {
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ Error:", err));

app.get("/", (req, res) => {
    res.send("API Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});