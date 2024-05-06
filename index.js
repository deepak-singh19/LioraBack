const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const enrollRouter= require("./routes/enroll");
var bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
const port = 3005;

app.use(express.json({ limit: '50mb' }));

app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/user", enrollRouter)



mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
