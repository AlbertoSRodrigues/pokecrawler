const { default: axios } = require("axios");

async function pokeData(dexNumberArray){
    let pokeDataArray = []
    for (pokemon of dexNumberArray){
        const pokeD = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let filteredData = {
            name: pokeD.data.name,
            type: pokeD.data.types[0].type.name,
            sprite: pokeD.data.sprites.other["official-artwork"].front_default
        }
        pokeDataArray.push(filteredData)
    }
    return pokeDataArray
}

// async function test(){
//     console.log( await pokeData([ '379', '17', '16', '18', '638' ]))
// }

// test()
module.exports = {pokeData}