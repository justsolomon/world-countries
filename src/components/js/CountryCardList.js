import React from 'react';
import CountryCard from './CountryCard';
import '../css/CountryCardList.css';

const CountryCardList = ({ allCountries }) => {
    return (
        <div className='country-card-list'>
            {
                allCountries.map((country, i) => {
                    const { name, flag, population, capital, region } = country;
                    return <CountryCard key={i} countryName={name} flagUrl={flag} population={population} capital={capital} region={region} />
                })
            }
        </div>
    )
}

export default CountryCardList;