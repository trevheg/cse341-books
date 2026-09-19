import express from "express";
const app = express();
import router from "./src/router.js";
 
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is running' });
})


export default app;