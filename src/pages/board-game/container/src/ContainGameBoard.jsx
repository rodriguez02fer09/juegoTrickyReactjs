import React, {useState} from 'react'
import '../styles/desktop.scss'
import {useSelector} from 'react-redux'

import ContainRestartTurn from '../../components/contain-restart-turn/src/ContainRestartTurn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'

import {findWinningLine, winnerPosition} from '../../../../utils'

import Confetti from '../../../board-game/components/winnwr-confetti'
import Modal from '../../../../common/components/modal/src/Modal'
import ReportGame from '../../../../common/components/reportGame/src/ReportGame'
import ModalTied from '../../../../common/components/modal-tied/src/ModalTied'
import ModalReststart from '../../../../common/components/modal-reststart/src/ModalReststart'

export default function ContainGameBoard() {
  // Tablero inicial desde Redux
  const reduxBoard = useSelector(state => state.board)

  // Estados locales de juego
  const [board, setBoard] = useState(reduxBoard)
  const [turn, setTurn] = useState('x') // X siempre inicia
  const [winnerSymbol, setWinnerSymbol] = useState(null)
  const [isTie, setIsTie] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [playerXWin, setPlayerXWin] = useState(0)
  const [playerOWin, setPlayerOWin] = useState(0)
  const [tieCount, setTieCount] = useState(0)
  const [showRestartModal, setShowRestartModal] = useState(false)

  /**
   * Reset completo del estado de la partida.
   */
  const handleReset = () => {
    setBoard(reduxBoard)
    setTurn('x')
    setWinnerSymbol(null)
    setIsTie(false)
    setShowConfetti(false)
    setTieCount(0)
    setShowRestartModal(false)
  }

  // Abre el modal de confirmación de reinicio
  const openRestartModal = () => setShowRestartModal(true)
  // Cierra el modal de reinicio sin cambiar nada
  const closeRestartModal = () => setShowRestartModal(false)

  /**
   * Maneja clic en una casilla:
   * - Marca la casilla
   * - Comprueba victoria o empate
   * - Cambia turno
   */
  const handleCellClick = idx => {
    if (winnerSymbol || isTie || board[idx].value) return

    // 1) Marca la casilla con el símbolo actual
    const newBoard = board.map(cell =>
      cell.index === idx ? {...cell, value: turn} : cell,
    )
    setBoard(newBoard)

    // 2) Comprueba victoria
    const {winner, positions} = findWinningLine(turn, newBoard)
    if (winner) {
      setWinnerSymbol(turn)
      setShowConfetti(true)
      setBoard(prev => winnerPosition(prev, positions))
      // Actualiza marcador y reinicia si >=8
      if (turn === 'x') {
        setPlayerXWin(prev => {
          const next = prev + 1
          if (next >= 8) handleReset()
          return next
        })
      } else {
        setPlayerOWin(prev => {
          const next = prev + 1
          if (next >= 8) handleReset()
          return next
        })
      }
      return
    }

    // 3) Comprueba empate
    const full = newBoard.every(cell => cell.value !== '')
    if (full) {
      setIsTie(true)
      setTieCount(prev => {
        const next = prev + 1
        if (next >= 8) {
          handleReset()
          return 0
        }
        return next
      })
      return
    }

    // 4) Cambia turno
    setTurn(prev => (prev === 'x' ? 'o' : 'x'))
  }

  return (
    <div className="contain-game-board">
      {/* Confetti al ganar */}
      {showConfetti && <Confetti />}

      {/* Modal de victoria */}
      {winnerSymbol && (
        <Modal containerId="modal">
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
        <Modal containerId="modal-tied">
          <ModalTied onClick={handleReset} />
        </Modal>
      )}

      {/* Modal de confirmación de reinicio */}
      {showRestartModal && (
        <Modal containerId="modal-Reststart">
          <ModalReststart
            onConfirm={handleReset} // limpia el tablero
            onCancel={() => setShowRestartModal(false)}
          />
        </Modal>
      )}

      {/* Botón de restart + indicador de turno/ganador */}
      <ContainRestartTurn
        value={winnerSymbol ?? (isTie ? '' : turn)}
        onRestartClick={openRestartModal}
      />

      {/* Tablero y marcador */}
      <Board board={board} handleCellClick={handleCellClick} />
      <ContainScoreGame
        playerXWin={playerXWin}
        playerOWin={playerOWin}
        ties={tieCount}
      />
    </div>
  )
}
