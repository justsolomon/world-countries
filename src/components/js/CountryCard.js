import React from 'react';
import '../css/CountryCard.css';
import { useHistory } from 'react-router-dom';

const CountryCard = ({countryName, flagUrl, population, region, capital}) => {
    const history = useHistory();
    return (
        <div className='country-card' onClick={() => history.push(`/${countryName}`)}>
            <div className='country-flag'>
                <img src={flagUrl} alt={`National Flag of ${countryName}`} className='country-flag__image' />
            </div>
            <div className='country-info'>
                <p className='country-name'>{countryName}</p>
                <div className='country-stats'>
                    <p className='country-population country-stats__stat'>
                        <span className='country-stats__title'>Population:</span>
                        <span className='country-stats__value'>{population}</span>
                    </p>
                    <p className='country-region country-stats__stat'>
                        <span className='country-stats__title'>Region:</span>
                        <span className='country-stats__value'>{region}</span>
                    </p>
                    <p className='country-capital country-stats__stat'>
                        <span className='country-stats__title'>Capital:</span>
                        <span className='country-stats__value'>{capital}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;