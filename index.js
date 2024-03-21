
import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(bodyParser.json());


app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));