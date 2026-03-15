import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle Visited Countries Clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total visited country: {visitedCountries.length}</h3>

            {
                visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            
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