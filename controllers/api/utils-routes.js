const axios = require('axios');
const router = require('express').Router();
const baseApiUrl = "https://api.ritekit.com/v1/stats/hashtag-suggestions?";
const apiKey = `&client_id=${process.env.HASH_API_KEY}`;


const search = (description) => {
    //const fetch = require("node-fetch");

    //let description = "This is a *&story all about how my &^%^life got flipped, turned upside down.";
    //descriptionNoSpace = description.replace(/ /g,"%20");
    //descriptionNoSpecial = descriptionNoSpace.replace(/[^a-zA-Z%20]/g, "");
    //console.log(descriptionNoSpecial);

    //Query the API for an event based upon keyword and pagesize
    var specURL = baseApiUrl + "text=" + encodeURIComponent(description) + apiKey;

    return axios.get(specURL)
        
}

router.get('/gethashtag', (req, res) => {
    const description = req.query.d;
    search(description)
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});



module.exports = router;