import React from 'react'
import Square from './Square'
import logoX from './images/logo192-X.png'
import logoO from './images/logo192-O.png'

const X = <img src={logoX} alt="X" width="24" height="24" />
const O = <img src={logoO} alt="O" width="24" height="24" />

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? X : O
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  reClick() {
    document.getElementById('Layer_2_1_').setAttribute('fill', 'red')
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    )
  }
}

export default Board
