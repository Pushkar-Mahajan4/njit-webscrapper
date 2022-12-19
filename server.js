const express = require("express");
const https = require("https");

const app = express();

const port = 3000;

app.get("/", async (req, res) => {
    const response = await https.get('https://generalssb-prod.ec.njit.edu/BannerExtensibility/customPage/page/stuRegCrseSched', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
      
        res.on('data', (d) => {
          process.stdout.write(d);
        });
      
      }).on('error', (e) => {
        console.error(e);
      });
});


app.listen(port, ()=>{
    console.log("Server is running");
});