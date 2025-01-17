const express = require('express')
const mongoos = require('mongoose')
const app = express()
const route = require("./routes/route")
const cors = require('cors')
require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use("/api", route);

mongoos.connect("mongodb+srv://anshid:p5iD12FvcyJm0opM@atlascluster.tx7fjfp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error", err));

    app.listen(3003, () => {
        console.log(`Server running on port 3003`);
    });
