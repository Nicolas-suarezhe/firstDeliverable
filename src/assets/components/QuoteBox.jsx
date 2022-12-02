import React, { useState } from 'react';
import quotes from '../quotes.json'
import '../../App'

const QuoteBox = ({getRandomNumber,randomNumber,colors}) => {
    


    return (
        <div className='quotebox' >
            <div className="quote">
                <b style={{color: colors[randomNumber]}} >
                '{quotes[randomNumber]?.quote}'
                </b>
            </div>
            <div className="author">
                <b style={{color: colors[randomNumber]}} >
                -{quotes[randomNumber]?.author}
                </b>
            </div>
            <button style={{color: colors[randomNumber]}} className='button-random' onClick={getRandomNumber}>RandomQuote</button>
        </div>
    );
};

export default QuoteBox;