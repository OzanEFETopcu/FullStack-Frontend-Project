import React, { useState }  from 'react';
import './../../CSS/Settings.css';

function Settings({ onBackgroundChange }){

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className='settings_page'>
      <h2>Application Theme</h2>
      <div>
        <button onClick={() => onBackgroundChange()}>Change Theme</button>
      </div>
      <h2>Single Active Task Mode</h2>
      <div className="toggle-slider">
        <input
          type="checkbox"
          id="toggle"
          checked={checked}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className="slider" />
      </div>
    </div>
  );
}
export default Settings;