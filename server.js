import express from "express";
import { recipes } from "./recipes.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the cooking recipe");
});

app.get('/recipes', (req, res) => {
    res.json(recipes);
});

const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })