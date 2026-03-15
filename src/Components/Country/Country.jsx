import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    const currencyKeys = Object.values(country.currencies.currencies);
    const currency = currencyKeys[0];
    // console.log(currency.name)

    const handleVisited = ()=>{
        console.log('btn clicked')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Currency: {currency?.name} ({currency?.symbol})</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ?"Big Country": "Small Country"}</p>
            <button onClick={handleVisited}>Not visited</button>
        </div>
    );  
};

export default Country;