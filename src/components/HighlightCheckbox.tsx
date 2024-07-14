import React from 'react';

interface HighlightCheckboxProps {
    onChange: (highlight: boolean) => void;
  }

const HighlightCheckbox: React.FC<HighlightCheckboxProps> = ({ onChange }) => {
  return (
    <div className='checkboxContainer'>
        <label>
      Highlight oldest per city
      </label>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}

export default HighlightCheckbox;