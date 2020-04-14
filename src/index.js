// First file to be loaded into browser
import ReactDOM from 'react-dom'; // bostrap file <- used only onces
import React from 'react';
import App from './App'; // no curly brace, means ==>  default import

console.log('Starting React');

// !Real Dom
const root = document.getElementById('root');

ReactDOM.render(<App />, root);
