import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { randomQuote } from '../services/quote'

function MainQuoteSection() {
  const [quote, setQuote] = useState({});
  let location = useLocation();
  useEffect(()=>{
    setQuote(randomQuote())
  },[location])
  return (
    <div className='container my-5'>
    <div className='bg-light jumbotron rounded-0 text-center  shadow '>
        <h3><i className='fas fa-quote-left'></i> {quote.text&&quote.text} <i className='fas fa-quote-right'></i></h3>
        <h5>- {quote.person&&quote.person}</h5>
    </div>
    </div>
  )
}

export default MainQuoteSection