import { Square } from "./Square"

export const MensajeWinner = ({winner}) => {
    return (
      <div>
        <h1>El ganador es:</h1>
        <h2 className='win'> <Square>{winner}</Square></h2>
      </div>
    )
  }