import React, { useState } from 'react';
import data from './data';

function App() {
  const [paragraphs, setParagraphs] = useState(0);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paragraphs);
    if(amount <= 0){
      amount = 1;
    }
    if(amount > data.length){
      amount = data.length;
    }
    setContent(data.slice(0,amount));
    
  }

  return (
    <main>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={paragraphs} onChange={(e)=>setParagraphs(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
      </form>

      <article className='lorem-text'>
        {
          content.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </main>
  );
}

export default App;
