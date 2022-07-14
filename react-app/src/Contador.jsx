import React, { useState } from 'react';

function Contador() {
  const [cantidadClicks, setCantidadClicks] = useState(0);

  const aumentarCantidadClicks = () => {
    setCantidadClicks(cantidadClicks + 1);
  };

  const reiniciarContador = () => {
    setCantidadClicks(0);
  };

  if (cantidadClicks === 10) {
    return (
      <div>
        <p onClick={reiniciarContador}>
          Amigo, por favor para. Haz otro click aquí para reiniciar.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>(Función) Total de Clicks: {cantidadClicks}</p>
      {cantidadClicks === 9 && <p>Ya no aguanto un click más.</p>}
      <button onClick={aumentarCantidadClicks}>Presioname</button>
    </div>
  );
}

export default Contador;
