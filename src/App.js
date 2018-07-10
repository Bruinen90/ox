import React, { Component } from 'react';
import './App.css';
import KKMain from './components/kkMain/kkMain';
import OKButton from './components/OKButton/OKButton';

class App extends Component {
    state = {
        grid: [false, false, false, false, false, false, false, false, false],
        gridTemp: [false, false, false, false, false, false, false, false, false],
        currentPlayer: "O",
    }

    clickHandler = (index) => {
        let currentGrid = [...this.state.grid];
        if (currentGrid[index] === false) {
        currentGrid[index] = this.state.currentPlayer;
        return(
            this.setState({
                gridTemp: currentGrid,
            })
        )

        }

    }

    saveHandler = () => {
        const currentTemp = [...this.state.gridTemp];
        let newPlayer = "";
        if (this.state.currentPlayer === "O") { newPlayer= "X"} else {newPlayer="O"}
        return(
            this.setState({
                grid: currentTemp,
                currentPlayer: newPlayer,
            })
        )
    }
  render() {
    return (
      <div className="App">
        <KKMain
            grid={this.state.gridTemp}
            click={(index) => this.clickHandler(index)}
        />
        <OKButton
            click={() => this.saveHandler()}
        />
      </div>
    );
  }
}

export default App;
