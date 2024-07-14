import React from 'react';

interface HighlightCheckboxProps {
    onChange: (highlight: boolean) => void;
  }
  
const HighlightCheckbox: React.FC<HighlightCheckboxProps> = ({ onChange }) => {
  return (
    <div>
        <label>
      Highlight oldest per city
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
      </label>
    </div>
  );
}

export default HighlightCheckbox;