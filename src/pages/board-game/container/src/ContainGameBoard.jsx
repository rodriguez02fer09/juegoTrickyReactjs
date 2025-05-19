import React, {useState} from 'react'
import '../styles/desktop.scss'
import {useSelector} from 'react-redux'

import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'

import {findWinningLine, winnerPosition} from '../../../../utils'

import Confetti from '../../../board-game/components/winnwr-confetti'
import Modal from '../../../../common/components/modal/src/Modal'
import ReportGame from '../../../../common/components/reportGame/src/ReportGame'
import ModalTied from '../../../../common/components/modal-tied/src/ModalTied'

export default function ContainGameBoard() {
  // Estado inicial del tablero de Redux
  const reduxBoard = useSelector(state => state.board)

  // Estados locales: tablero, turno, ganador, empate, confeti y marcador
  const [board, setBoard] = useState(reduxBoard)
  const [turn, setTurn] = useState('x') // X siempre inicia
  const [winnerSymbol, setWinnerSymbol] = useState(null)
  const [isTie, setIsTie] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [playerXWin, setPlayerXWin] = useState(0)
  const [playerOWin, setPlayerOWin] = useState(0)

  // Reinicia todo para la siguiente ronda o inicio
  const handleReset = () => {
    setBoard(reduxBoard)
    setTurn('x')
    setWinnerSymbol(null)
    setIsTie(false)
    setShowConfetti(false)
  }

  // Maneja el click en una casilla
  const handleCellClick = idx => {
    if (winnerSymbol || isTie || board[idx].value) return

    // 1) Marca la casilla con el símbolo del turno actual
    const newBoard = board.map(cell =>
      cell.index === idx ? {...cell, value: turn} : cell,
    )
    setBoard(newBoard)

    // 2) Comprueba si hay ganador
    const {winner, positions} = findWinningLine(turn, newBoard)
    if (winner) {
      setWinnerSymbol(turn)
      setShowConfetti(true)
      setBoard(prev => winnerPosition(prev, positions))
      // Actualiza marcador
      if (turn === 'x') setPlayerXWin(x => x + 1)
      else setPlayerOWin(o => o + 1)
      return
    }

    // 3) Comprueba empate
    const full = newBoard.every(cell => cell.value !== '')
    if (full) {
      setIsTie(true)
      return
    }

    // 4) Cambia turno
    setTurn(prev => (prev === 'x' ? 'o' : 'x'))
  }

  return (
    <div className="contain-game-board">
      {showConfetti && <Confetti />}

      {/* Modal de victoria */}
      {winnerSymbol && (
        <Modal>
          <ReportGame
            takeRound="TAKES THE ROUND"
            textReport="YOU WON!"
            value={winnerSymbol}
            onClick={handleReset}
          />
        </Modal>
      )}

      {/* Modal de empate */}
      {isTie && !winnerSymbol && (
        <Modal>
          <ModalTied onClick={handleReset} />
        </Modal>
      )}

      {/* Controles de reinicio y turno/ganador */}
      <ContainRestartTurn
        value={winnerSymbol ?? (isTie ? '' : turn)}
        handleReset={handleReset}
      />

      {/* Tablero de juego */}
      <Board board={board} handleCellClick={handleCellClick} />

      {/* Marcador de puntuaciones */}
      <ContainScoreGame playerXWin={playerXWin} playerOWin={playerOWin} />
    </div>
  )
}
