const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware

const app = express();

app.use(express.json());

const mongoURI = "mongodb://localhost:27017/railways";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/trains", require("./routes/train"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
