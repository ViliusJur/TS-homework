/* eslint-disable no-lone-blocks */
console.group('Enums - užduotys');
{
    enum LtCities {
        Vilnius = 'Vilnius',
        Kaunas = 'Kaunas',
        Klaipėda = 'Klaipėda',
        Šiauliai = 'Šiauliai',
        Panevėžys = 'Panevėžys'

    }

    enum TopPopulationCountries {
        China,
        USA,
        Indonesia,
        Pakistan,
        Brazli
    }

    enum TopGdpCountries {
        USA = 1,
        China,
        Japan,
        Germany,
        UK
    }

    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
      const city1: LtCities = LtCities.Vilnius;
      const city2: LtCities = LtCities.Kaunas;
      const city3: LtCities = LtCities.Klaipėda;
      const city4: LtCities = LtCities.Šiauliai;
      const city5 = LtCities.Panevėžys;

      console.log(city1, city2, city3, city4, city5);
    }
    console.groupEnd();

    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
      const topPopulationCountry: TopPopulationCountries[] = [
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
      const topGdpCountries: TopGdpCountries[] = [
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
