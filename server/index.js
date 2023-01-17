const { pokeAPI } = require("./services/pokeAPI");
const { pokeList } = require("./services/pokeList")
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/home/:league/:pokeNumber', async(req,res)=>{ 
    try{
        console.log(req.params)
        const {league, pokeNumber} = req.params
        const dexNumberArray = await callFunctions(league,pokeNumber)
        return res.status(200).json(dexNumberArray)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json("Server Error")

    }
   
}) 

async function callFunctions(league,pokeNumber){
    let namesArray = await pokeList(league,pokeNumber) // Tipo de liga / Quantidade no filtro
    let dexNumberArray = await pokeAPI(namesArray)

    return dexNumberArray
}


app.listen(3001,()=>{console.log("server started")})
