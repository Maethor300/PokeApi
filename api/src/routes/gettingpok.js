require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/" , async (req,res)=>{
    let apiOriginal = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    let info = await apiOriginal.data.results;
    let recorrer = info.map((i)=>{
        return {
            url:i.url,
        }
    })
    res.send(recorrer)
 
})
module.exports = router;