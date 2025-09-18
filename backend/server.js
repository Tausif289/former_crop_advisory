import express from 'express';
import i18next from "i18next";
import cors from 'cors'
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";
import path from "path";
import connectToDatabase from './config/mongodb.js';
import 'dotenv/config'
import userrouter from './routes/userroute.js';
import multer from "multer";
import soilRoutes from './routes/soilRoute.js';
import croproutes from './routes/croproute.js';
import marketRoutes from "./routes/marketRoute.js";
import questionroutes from "./routes/questionroutes.js"
import translationRoutes from "./routes/translationroutes.js";
import { fileURLToPath } from "url";
const port=process.env.PORT||4000;
const app=express()

app.use(express.json())
app.use(cors());
// i18next initialization
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    preload: ["en", "hi"], // supported languages
    ns: ["dashboard"],      // namespaces
    defaultNS: "dashboard",
    backend: {
      loadPath: path.join(__dirname, "/locates/{{lng}}/{{ns}}.json")
    }
  });

connectToDatabase();
const storage = multer.memoryStorage();
const upload = multer({ storage });


app.use('/api/user',userrouter);
app.use("/api/soil", soilRoutes);
app.use("/api/crop", croproutes);
app.use("/api/marketprices", marketRoutes);
app.use("/api", questionroutes);
app.use(middleware.handle(i18next));
app.use("/api/translate", translationRoutes);

app.get("/",(req,res)=>{
    res.send("working")
});

app.listen(port,()=>{
    console.log("server is running on port ",port)
});