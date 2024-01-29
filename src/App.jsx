import './App.css';
import { useState, useEffect } from 'react';
import { findMatchingKeywords } from "./util/helpers";


import { KeywordInput } from "./components/input";

function App() {
  const [keywords, setKeywords] = useState([]);
  const [matchingKeywords, setMatchingKeywords] = useState([]);

  const handleKeywordsChange = (newKeywords) => {
    setKeywords(newKeywords);
  };

  useEffect(() => {
    setMatchingKeywords(findMatchingKeywords(keywords))
  }, [keywords])

  return (
    <main>
      <KeywordInput initialKeywords={keywords} onKeywordsChange={handleKeywordsChange} />
      {matchingKeywords.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img}></img>
          </div>
        )
      })}
    </main>
  )
}

export default App