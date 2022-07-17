import React, { useEffect, useState } from 'react';
import './SuperSwitch.css';

const SuperSwitch = ({ value, hasMargin, onChange }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(value);
  }, [value]);

  const onChangeIndicator = () => {
    const newActive = !active;

    setActive(newActive);

    // Comunicar al componente padre que el valor de active ha cambiado
    if (typeof onChange === 'function') {
      onChange(newActive);
    }
  };

  return (
    <div
      className={`super-switch ${hasMargin ? 'add-margin' : ''}`}
      onClick={onChangeIndicator}
    >
      <div className={`indicator ${active ? 'active' : ''}`} />
    </div>
  );
};

export default SuperSwitch;
