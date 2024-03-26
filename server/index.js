const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.router");
const filmRouter = require("./routes/film.router");
const userRouter = require("./routes/user.router");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");

const insertTestData = require("./testData/insetTestData");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/film", filmRouter);
app.use("/user", userRouter);

const start = async () => {
    try {

        await mongoose.connect(config.get("dbUrl"));

        await insertTestData.dropAllData();
        await insertTestData.insertAllTestData();

        app.listen(PORT, () => {
           console.log("Server started on port ", PORT);
        });

    }catch (e){
        console.log(e);
    }
}

start();