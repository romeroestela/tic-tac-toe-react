import { MensajeWinner } from './MensajeWinner'

export function  WinnerModal({winner, resetGame}){
    if (winner == null) return null

    const winnerText = winner == false ? 'Empate' : <MensajeWinner winner={winner}></MensajeWinner>
    
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                  {winnerText}
                </h2>
                <footer>
                  <button onClick={resetGame} >Empezar de nuevo</button>
                </footer>
            </div> 
        </section>
          
    )   
}