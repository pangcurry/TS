import express from "express";
import router from "./routes";
// import cors from 'cors';


const app = express();

app.listen(3000, () => {
    console.log('server 3000 open !');
});

app.use('/',router);

// app.use(cors());
app.get('/ping',(req, res) => {
    res.status(200).json({
        message: "pong ih"
    });
});
