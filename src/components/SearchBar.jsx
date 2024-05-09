import { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './Result';
import styles from './SearchBar.module.css';
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
  const [value, setValue] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [result, setResult] = useState(null);

  const findResult = (title) => {
    setResult(suggestions.find((suggestion) => suggestion.title === title));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1, ${value}`
        );
        setSuggestions(data.title);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <> 
    <div className="max-w-10xl px-4 sm:px-6 lg:px-8">  
      <div className={styles.container}> 
        <FaSearch className={styles.search_icon} /> 
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={async () => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 200);
          }}
          type="text"
          className={styles.textbox}
          placeholder="Search movie title"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
     </div>    
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion.title)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
        </div>
      {result && <Result {...result} />}
    </>
  );
};

export default SearchBar;
