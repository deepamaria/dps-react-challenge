import React from 'react';

const cities = ['New York', 'Jacksonville', 'Washington', 'Dallas', 'Columbus'];

const DropDown: React.FC = () => {
  return (
    <div>
        <select>
            <option value="">Select city</option>
            {cities.map(city => (
                <option key={city} value={city}>{city}</option>
            ))}
       </select>
    </div>
  );
}

export default DropDown;