const { pokeAPI } = require("./services/pokeAPI");
const { pokeList } = require("./services/pokeList")
const express = require('express')
const cors = require('cors');
const { editDexArray } = require("./services/editDexArray");
const { pokeData } = require("./services/pokeData")

const app = express()
app.use(cors())
app.use(express.json())
app.get('/home/:league/:pokeNumber', async(req,res)=>{ 
    try{
        //console.log(req.params)
        const {league, pokeNumber} = req.params
        const dataArray = await callFunctions(league,pokeNumber)

        return res.status(200).json(dataArray)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json("Server Error")

    }
   
}) 

async function callFunctions(league,pokeNumber){
    let namesArray = await pokeList(league,pokeNumber) // Tipo de liga / Quantidade no filtro
    let dexNumberArray = await pokeAPI(namesArray)

    let pokeInfo = await pokeData(dexNumberArray)
    let editedString = editDexArray(dexNumberArray)

    return [editedString,pokeInfo]
}


app.listen(3001,()=>{console.log("server started")})
