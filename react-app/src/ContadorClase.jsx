import React, { Component } from 'react';

export default class ContadorClase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cantidadClicks: 0,
    };
  }

  aumentarClicks = () => {
    this.setState(({ cantidadClicks }) => ({
      cantidadClicks: cantidadClicks + 1,
    }));
  };

  reiniciarContador = () => {
    this.setState({ cantidadClicks: 0 });
  };

  render() {
    if (this.state.cantidadClicks === 10) {
      return (
        <div>
          <p onClick={this.reiniciarContador}>
            Amigo, por favor para. Haz otro click aquí para reiniciar.
          </p>
        </div>
      );
    }

    return (
      <div>
        <p>(Clase) Total de Clicks: {this.state.cantidadClicks}</p>
        {this.state.cantidadClicks === 9 && <p>Ya no aguanto un click más.</p>}
        <button onClick={this.aumentarClicks}>Presioname</button>
      </div>
    );
  }
}
