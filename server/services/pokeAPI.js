const { default: axios } = require("axios");


async function pokeAPI(namesArray){
    let dexArray = []
    for (pokemon of namesArray){        
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
        
        if(pokeData.data.evolves_from_species != null){
            const subPokeId = pokeData.data.evolves_from_species.url.slice(0,pokeData.data.evolves_from_species.url.length-1).slice(pokeData.data.evolves_from_species.url.indexOf("s/")+2,pokeData.data.evolves_from_species.url.length)// remove a ultima barra e depois pega o número entre as barras // tratativa pra pegar o número dentro da string
            dexArray.push(subPokeId)
            const subPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${subPokeId}`)
            if (subPokeData.data.evolves_from_species != null){
                const subSubPokeId = subPokeData.data.evolves_from_species.url.slice(0,subPokeData.data.evolves_from_species.url.length-1).slice(subPokeData.data.evolves_from_species.url.indexOf("s/")+2,subPokeData.data.evolves_from_species.url.length)
                dexArray.push(subSubPokeId)
            }
        }
        dexArray.push(pokeData.data.id.toString())
      
    }
    return(dexArray)
}


module.exports = {pokeAPI};