 import  jsonData from './countryData.json'assert { type: 'json' };

 const countryData=jsonData
//Get all the countries from Asia continent /region using Filter method
const asianCountries = countryData.filter(country => country.region === 'Asia').map(country=>country.name.official)
console.log(asianCountries)
//Get all the countries with a population of less than 2 lakhs using Filter method
const populationLessthan2Lakh = countryData.filter(country => country.population < 200000).map(country=>country.name.official)
console.log(populationLessthan2Lakh)

//Print the following details name, capital, flag, using forEach method
countryData.forEach(country => {
    console.log("Country:", country.name.common);
    console.log("Capital:", country.capital);
    
    console.log("--------------------");
});
// Calculate the total population using the reduce method
const totalPopulation = countryData.reduce((total, country) => {
    return total + country.population;
}, 0);

console.log("Total population of countries:", totalPopulation);
//Print the country that uses US dollars as currency.
const usDollorUsageCountry = countryData.filter(country =>country.currencies && country.currencies["USD"]).map(country=>country.name.official)
console.log(usDollorUsageCountry)



