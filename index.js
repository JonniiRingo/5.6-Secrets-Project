// HINTS:


// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.


import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


// No need for bearer token or configuration variables etc. 

app.use(express.static("public")); 

app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/random"); 
        res.render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username,
    });
    } catch(error){
        console.log(error.response.data);
        res.status(500); 
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});