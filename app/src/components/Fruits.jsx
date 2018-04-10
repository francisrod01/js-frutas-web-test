import React, { Component } from 'react';

import Api from '../api';

import '../statics/styles/Fruits.css';


const renderEmptyFruitMessage = () => (
  <div className="Fruit-content">
    <p>Seleccione un iten a la izquierda.</p>
  </div>
);

const renderFruitContent = item => (
  <div className="Fruit-content">
    <h2>{ item.name }</h2>

    <p>Color: { item.color }</p>
  </div>
);

class AppContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitsList: [],
      fruit: null,
    };
  }
  async componentWillMount() {
    await Api.loadFruits()
      .then((resultData) => {
        if (resultData.status === 200) {
          this.setState({ fruitsList: resultData.data });
        }
      });
  }
  onClickItem(item) {
    this.setState({ fruit: item });
  }
  render() {
    const { fruitsList, fruit } = this.state;
    return (
      <div className="App-intro">
        <h2>Lista de Frutas</h2>

        <div className="Fruit-menu">
          <ul>
            { Object.values(fruitsList).map(data => (
              <li key={data.id}>
                <button onClick={() => this.onClickItem(data)}>{data.name}</button>
              </li>
            ))}
          </ul>
        </div>

        { !fruit && renderEmptyFruitMessage() }

        { !!fruit && renderFruitContent(fruit) }
      </div>
    );
  }
}

export default AppContent;
