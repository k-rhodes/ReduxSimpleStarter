import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyDOmDwvxKtmaaseUzF84BqbsAaTOHZ1j2c';


// Create a new component. this component shouid produce some html
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// take this component's generated HTML and put it on the page (in teh DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
