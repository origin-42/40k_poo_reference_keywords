import { useState, useEffect } from 'react';



export const KeywordInput = ({ initialKeywords, onKeywordsChange }) => {
    const [keywords, setKeywords] = useState(initialKeywords || []);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            const newKeywords = [...keywords, inputValue.trim()];
            setKeywords(newKeywords);
            onKeywordsChange(newKeywords);
            setInputValue('');
        }
    };

    const handleRemoveKeyword = (index) => {
        const newKeywords = [...keywords];
        newKeywords.splice(index, 1);
        setKeywords(newKeywords);
        onKeywordsChange(newKeywords);
    };

    useEffect(() => {
        setKeywords(initialKeywords || []);
    }, [initialKeywords]);

    return (
        <div>
            <div>
                {keywords.length === 0 ? (
                    <span className="message">Enter a keyword to search</span>
                ) : (
                    keywords.map((keyword, index) => (
                        <span key={index} className="keyword">
                            {keyword}
                            <button onClick={() => handleRemoveKeyword(index)}>x</button>
                        </span>
                    ))
                )}
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search at Your Behest"
            />
        </div>
    );
};

