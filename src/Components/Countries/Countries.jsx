import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle Visited Countries Clicked', country)
    };

    return (
        <div>
            <h2>In the Countries: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;