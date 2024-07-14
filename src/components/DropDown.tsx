import React, {useState} from 'react';

interface DropdownProps {
    onSelect: (city: string) => void;
}
// Dummy array created for testing
// const cities = ['New York', 'Jacksonville', 'Washington', 'Dallas', 'Columbus'];

// Display cities in Dropdown from the json file 


const DropDown: React.FC<DropdownProps> = ({ onSelect }) => {
  
    const [cities, setCities] = useState<string[]>([]);

    
  
    return (
    <div className='dropdownContainer'>
        <label>
            City
        </label>
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