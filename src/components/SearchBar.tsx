import React from 'react';

interface SearchBarProps {
    onSearch: (term: string) => void;
  }

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className='searchbarContainer'>
        <label>
        Name
        </label>
        <input
        type="text"
        placeholder=""
        onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  );
}

export default SearchBar;