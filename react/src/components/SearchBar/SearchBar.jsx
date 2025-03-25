import "./SearchBar.css";

export function SearchBar({searchValue, setSearchValue}) {

  return (
    <div className="search-container">
      <label className="label">Search:</label>
      <input className="search-bar" name="search-query" value={searchValue}
      onChange={(e) =>setSearchValue(e.target.value)}
      />
      
      <button className="search-button">
        <img
          className="search-icon"
          src="https://i.postimg.cc/DZmHVpK3/search.png"
        ></img>
      </button>
    </div>
  );
}
