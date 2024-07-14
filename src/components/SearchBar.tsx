import React from 'react';

interface SearchBarProps {
    onSearch: (term: string) => void;
  }

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div>
        <input
        type="text"
        placeholder="Name"
        onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  );
}

export default SearchBar;