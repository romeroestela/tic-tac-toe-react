import './App.css'
import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './componentes/Square'
import { TURNS } from './componentes/constants'
import { MensajeWinner } from './componentes/MensajeWinner'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './componentes/WinnerModal'

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null no hay ganador, false hay empate

  const updateBoard = (index) => {
    console.log(winner)
    if (board[index] || winner) return //Si ya tiene algo no se actualiza el tablero
    //Actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambiar turnos
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)
    
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
      MensajeWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) //Empate
    }

  }
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
      
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
    
  )
}

export default App
