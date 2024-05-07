const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const authRouter = require("./routes/auth.router");
const filmRouter = require("./routes/film.router");
const userRouter = require("./routes/user.router");
const config = require("config");

const app = express();
const PORT = config.get("server.port");
app.use(fileUpload({}));

const insertData = require("./database_operations/insertData");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/film", filmRouter);
app.use("/user", userRouter);

const start = async () => {
    try {

        await mongoose.connect(config.get("server.dbURL"));

        app.listen(PORT, () => {
           console.log("Server started on port ", PORT);
           // insertData.dropAllData();
           //insertData.insertGenreData();
           //insertData.insertFilmData();
            insertData.insertUserData();
        });

    }catch (e){
        console.log(e);
    }
}

start();