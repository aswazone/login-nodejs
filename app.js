const express = require("express");
const app = express();

const hbs = require("hbs");

const port = 3000;

//seting view engine
app.use(express.static("public"));
app.set("view engine", "hbs");

// nocache
const nocache = require("nocache");
app.use(nocache());

// session
const session = require("express-session");
app.use(session({
    secret:"key",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))

//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/user");

app.use("/", userRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})