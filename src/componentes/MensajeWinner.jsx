import { Square } from "./Square"
import PropTypes from 'prop-types';

export const MensajeWinner = ({winner}) => {
    return (
      <div>
        <h1>El ganador es:</h1>
        <h2 className='win'> <Square>{winner}</Square></h2>
      </div>
    )
  }

  MensajeWinner.propTypes = {
    winner: PropTypes.any.isRequired
  }