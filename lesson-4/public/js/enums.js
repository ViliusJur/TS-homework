"use strict";
console.group('Enums - užduotys');
{
    let LtCities;
    (function (LtCities) {
        LtCities["Vilnius"] = "Vilnius";
        LtCities["Kaunas"] = "Kaunas";
        LtCities["Klaip\u0117da"] = "Klaip\u0117da";
        LtCities["\u0160iauliai"] = "\u0160iauliai";
        LtCities["Panev\u0117\u017Eys"] = "Panev\u0117\u017Eys";
    })(LtCities || (LtCities = {}));
    let TopPopulationCountries;
    (function (TopPopulationCountries) {
        TopPopulationCountries[TopPopulationCountries["China"] = 0] = "China";
        TopPopulationCountries[TopPopulationCountries["USA"] = 1] = "USA";
        TopPopulationCountries[TopPopulationCountries["Indonesia"] = 2] = "Indonesia";
        TopPopulationCountries[TopPopulationCountries["Pakistan"] = 3] = "Pakistan";
        TopPopulationCountries[TopPopulationCountries["Brazli"] = 4] = "Brazli";
    })(TopPopulationCountries || (TopPopulationCountries = {}));
    let TopGdpCountries;
    (function (TopGdpCountries) {
        TopGdpCountries[TopGdpCountries["USA"] = 1] = "USA";
        TopGdpCountries[TopGdpCountries["China"] = 2] = "China";
        TopGdpCountries[TopGdpCountries["Japan"] = 3] = "Japan";
        TopGdpCountries[TopGdpCountries["Germany"] = 4] = "Germany";
        TopGdpCountries[TopGdpCountries["UK"] = 5] = "UK";
    })(TopGdpCountries || (TopGdpCountries = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const city1 = LtCities.Vilnius;
        const city2 = LtCities.Kaunas;
        const city3 = LtCities.Klaipėda;
        const city4 = LtCities.Šiauliai;
        const city5 = LtCities.Panevėžys;
        console.log(city1, city2, city3, city4, city5);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const topPopulationCountry = [
            TopPopulationCountries.China,
            TopPopulationCountries.USA,
            TopPopulationCountries.Indonesia,
            TopPopulationCountries.Pakistan,
            TopPopulationCountries.Brazli,
        ];
        console.log(topPopulationCountry);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const topGdpCountries = [
            TopGdpCountries.USA,
            TopGdpCountries.China,
            TopGdpCountries.Japan,
            TopGdpCountries.Germany,
            TopGdpCountries.UK,
        ];
        console.log(topGdpCountries);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map