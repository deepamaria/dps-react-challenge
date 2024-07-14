import React from 'react';

interface DropdownProps {
    onSelect: (city: string) => void;
}

const cities = ['New York', 'Jacksonville', 'Washington', 'Dallas', 'Columbus'];

const DropDown: React.FC<DropdownProps> = ({ onSelect }) => {
  return (
    <div>
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select city</option>
            {cities.map(city => (
                <option key={city} value={city}>{city}</option>
            ))}
       </select>
    </div>
  );
}

export default DropDown;