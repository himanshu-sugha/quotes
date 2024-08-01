// src/components/SavedQuotes.js
import React from 'react';

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes</h2>
      {savedQuotes.map((quote, index) => (
        <div key={index} className="bg-orange-200 p-4 rounded-lg shadow-md mb-4">
          <p className="text-lg">{quote}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedQuotes;
