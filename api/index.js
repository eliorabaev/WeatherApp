import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;
const apiUrl = "http://api.weatherapi.com/v1/current.json?";
var flag = false;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(`${apiUrl}key=${apiKey}&q=auto:ip`);
        flag = true;
        res.render("index.ejs", {
            flag:flag,
            location: result.data.location.name,
            localtime: result.data.location.localtime,
            temp: result.data.current.temp_c,
            condition: result.data.current.condition.text,
            icon: result.data.current.condition.icon,
            wind: result.data.current.wind_kph,
            humidity: result.data.current.humidity,
            uv: result.data.current.uv,
        });
      } catch (error) {
        res.render("index.ejs", {
            flag: false,
            location: null,
            localtime: null,
            temp: null,
            condition: null,
            icon: null,
            wind: null,
            humidity: null,
            uv: null,
            error: "City not found!"
        });
        console.log(error);
        res.status(500);
    }
});

app.get("/get-weather", async (req, res) => {
    const city = req.query.city;
    try {
        const result = await axios.get(`${apiUrl}key=${apiKey}&q=${city}`);
        flag = false;
        res.render("index.ejs", {
          flag: flag,
          location: result.data.location.name,
          localtime: result.data.location.localtime,
          temp: result.data.current.temp_c,
          condition: result.data.current.condition.text,
          icon: result.data.current.condition.icon,
          wind: result.data.current.wind_kph,
          humidity: result.data.current.humidity,
          uv: result.data.current.uv,
          error: null
        });
    } catch (error) {
        res.render("index.ejs", {
            error: "City not found!",
            location: null,
            localtime: null,
            temp: null,
            condition: null,
            icon: null,
            wind: null,
            humidity: null,
            uv: null
        });
        console.log(error);
        res.status(400);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});