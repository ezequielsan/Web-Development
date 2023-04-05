import React from 'react';

/*  
 * Criando uma função usando classes
*/
export class HelloWorldV4 extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Ezequiel dos Santos Melo</h1>
        <h2>Ciência da Computação</h2>
        <h3>UFC - Campus Quixadá</h3>
        <p>Semestre: {10/2}°</p>
      </div>
    )
  }
}