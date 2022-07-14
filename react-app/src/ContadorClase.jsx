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

  render() {
    return (
      <div>
        <p>(Clase) Total de Clicks: {this.state.cantidadClicks}</p>
        <button onClick={this.aumentarClicks}>Presioname</button>
      </div>
    );
  }
}
