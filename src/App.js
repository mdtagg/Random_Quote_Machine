import React from 'react';
import './App.css';

function App() {
  return (
        <div className='quote-box'>
          <div className='quote-container'>
            <div id='quote'>test test test test test test test test test test test test test</div>
            <div id='quote-author'>-author</div>
          </div>
          <div className='new-quote-container'>
            <div className='socials'>
              <button className='button'></button>
              <button className='button'></button>
            </div>
            <div className='new-quote'>
              <button className='button' id='new-button'>
                New Quote
              </button>
            </div>
          </div>
        </div>
      )
    }

export default App;
