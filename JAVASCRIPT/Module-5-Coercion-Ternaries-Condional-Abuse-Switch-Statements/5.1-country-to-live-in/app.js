//!Logical Operators

//* 1. Create a function called ‘countryToLiveIn’ that takes 4 parameters:
//* language, isIsland, population and country.isIsland’s argument value should
//* be true or false.population’s argument value should be an integer.country
//* should be a string of a country.
//* Language should be a string.

//* 2. Let's say Sarah is looking for a new country to live in. She wants to live
//* in a country that speaks English, has less than 50 million people and is not an island.

//* 4. If yours is the right country, log a string like this: 'You should live in Finland. If not,
//* log 'Finland does not meet your criteria'.

//* 5. If your country does not meet all the criteria, go back and temporarily change some argument
//* values in order to make the condition true.
function countryToLiveIn(language, isIsland, population, country) {

    if (language === 'english' && population === '50m' && !isIsland && country === 'finland') {
        return 'you should live in finland';
    } else {
        return 'finland does not meet your criteria';
    }
}

//! Wont Work
console.log(countryToLiveIn("english" ,false ,"40m","finland"));
//! Works
console.log(countryToLiveIn("english" ,false ,"50m","finland"));
//--------------------------------------------------------------------------------------

