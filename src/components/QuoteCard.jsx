// src/components/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="bg-orange-200 p-4 rounded-lg shadow-md mb-4">
      <p className="text-xl font-semibold mb-4">{quote}</p>
      <button
        onClick={() => onSave(quote)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
