import React, { useState } from 'react';

function Contador() {
  const [cantidadClicks, setCantidadClicks] = useState(0);

  const aumentarCantidadClicks = () => {
    setCantidadClicks(cantidadClicks + 1);
  };

  return (
    <div>
      <p>(Función) Total de Clicks: {cantidadClicks}</p>
      <button onClick={aumentarCantidadClicks}>Presioname</button>
    </div>
  );
}

export default Contador;
