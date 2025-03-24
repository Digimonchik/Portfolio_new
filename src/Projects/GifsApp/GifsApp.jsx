import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifs, removeGifs } from '../../store/reduxStore/gifsSlice';

const GifSearch = () => {
  const [query, setQuery] = useState(""); 
  const dispatch = useDispatch();
  const { gifs, status, error } = useSelector((state) => state.gifs);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchGifs(query));
    }
  };

  const handleClear = () => {
    dispatch(removeGifs());
    setQuery("");
  };

  return (
    <div>
      <div className="gifs-app__search ">
      <h2 className="gifs-app__search_heeder">Search GIFs</h2>
      <div className="gifs-app__search_input">
      <input 
      className = 'gifs-app__search_field'
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="cat..." 
      />
      <button className = 'gifs-app__search_button'onClick={handleSearch} disabled={status === "loading"}>
        Find
      </button>
      <button className = 'gifs-app__search_button' onClick={handleClear}>Clear</button>
      </div>
      </div>

      {status === "loading" && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      <div className="gifs-app__gifs">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} className="gifs-app__gifs_item" />
        ))}
      </div>
    </div>
  );
};

export default GifSearch;