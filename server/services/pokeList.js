const { default: puppeteer } = require("puppeteer");


async function pokeList(league,maxNumber){

    const url = `https://pvpoke.com/rankings/all/${league}/overall/`
    const browser = await puppeteer.launch(); // puppeteer.launch({headless: false}); para abrir o browser
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(4000)
    await page.click('.check.xl.on')
    let namesArray = await page.$$eval('.name', rank=>rank.map(span => span.textContent))
    browser.close()
   return editNamesArray(namesArray,maxNumber)
}

function editNamesArray (namesArray,maxNumber){
   
   namesArray = namesArray.map(name => 
    {
        name = name.replace('XL', '')
        name = name.toLowerCase()
        if(name.indexOf('(')>0)
        {
          return name.slice(0,(name.indexOf('(')-1))
        }else{
           return name
        }
    });   
    namesSet = [... new Set (namesArray)] // transforma o Array em um Set, pra eliminar as duplicidades
    namesArray = Array.from(namesSet) // retorna para Array
    namesArray = namesArray.slice(0,maxNumber) // Pega os n primeiros elementos do array


   return namesArray
   
   
    
}

module.exports = {pokeList}