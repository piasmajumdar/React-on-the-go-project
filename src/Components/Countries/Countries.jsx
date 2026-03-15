import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle Visited Countries Clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlag = (flag)=> {
        // console.log('Flag needs to be added', flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total visited country: {visitedCountries.length}</h3>
            <h3>Total flags visited: {visitedFlags.length}</h3>

            {
                visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
            }

            <div className='visited-flag-container'>
                {visitedFlags.map((flag, index)=> <img key={index} src={flag}></img>)}
            </div>
            
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}
                        handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;