import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country);
    const currencyKeys = Object.values(country.currencies.currencies);
    const currency = currencyKeys[0];
    // console.log(currency.name)

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {

        // Method 1: 
        // if(visited){
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true);
        // }

        // Method 2:
        // setVisited(visited ? false : true)

        // Method 3:
        setVisited(!visited)
    }
    return (
        //<div className={`country ${visited ? 'country-visited' " 'country-not-visited'"}`}
        <div className={`country ${visited && 'visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Currency: {currency?.name} ({currency?.symbol})</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;