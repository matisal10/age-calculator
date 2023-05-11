import React from 'react'

import './css/calculatorAge.css'

export default function CalculatorAge({ ageData }) {

    const birthdate = new Date(ageData.year, ageData.month - 1, ageData.day)

    const ageInMilliseconds = Date.now() - birthdate.getTime();

    const years = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));


    return (
        <div className='containerAge'>
            <h3>{years ? years : '- -'} <span> years</span></h3>
            <h3>{months ? months : '- -'} <span> months</span></h3>
            <h3>{days ? days : '- -'} <span> days</span></h3>
            
        </div>
    )
}
