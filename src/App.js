// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Ron Swanson Quotes</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={fetchQuote}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Get New Quote
        </button>
      </div>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
