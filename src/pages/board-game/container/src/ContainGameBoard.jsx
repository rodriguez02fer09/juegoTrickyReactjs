import React, {useState, useEffect, useContext} from 'react'
import '../styles/desktop.scss'
import {useSelector} from 'react-redux'

import ContainRestartTurn from '../../components/contain-restart-turn/src/ContainRestartTurn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'

import {findWinningLine, winnerPosition} from '../../../../utils'
import {TrickyContext} from '../../../../Context'
import WinnerConfetti from '../../../board-game/components/winnwr-confetti'
import Modal from '../../../../common/components/modal/src/Modal'
import ReportGame from '../../../../common/components/reportGame/src/ReportGame'
import ModalTied from '../../../../common/components/modal-tied/src/ModalTied'
import ModalReststart from '../../../../common/components/modal-reststart/src/ModalReststart'

export default function ContainGameBoard() {
  const {getPlayerSelect} = useContext(TrickyContext)
  const playerChoice = getPlayerSelect()

  const templateBoard = useSelector(state => state.board)
  const emptyBoard = templateBoard.map(cell => ({...cell, value: ''}))

  const [board, setBoard] = useState(emptyBoard)
  const [turn, setTurn] = useState('')
  const [winnerSymbol, setWinnerSymbol] = useState(null)
  const [isTie, setIsTie] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [playerXWin, setPlayerXWin] = useState(0)
  const [playerOWin, setPlayerOWin] = useState(0)
  const [tieCount, setTieCount] = useState(0)
  const [showRestartModal, setShowRestartModal] = useState(false)

  // Inicializo el turno y el tablero cuando cambia la elección de jugador inicial
  useEffect(() => {
    if (playerChoice === 'x' || playerChoice === 'o') {
      setTurn(playerChoice)
      setBoard(emptyBoard)
    }
  }, [playerChoice])

  const handleReset = () => {
    setBoard(emptyBoard)
    setTurn(playerChoice || '')
    setWinnerSymbol(null)
    setIsTie(false)
    setShowConfetti(false)
    setTieCount(0)
    setShowRestartModal(false)
  }

  const openRestartModal = () => setShowRestartModal(true)
  const closeRestartModal = () => setShowRestartModal(false)

  const handleCellClick = idx => {
    if (!turn || winnerSymbol || isTie || board[idx].value) return

    // Pinto la celda con el símbolo del turno actual
    const newBoard = board.map(cell =>
      cell.index === idx ? {...cell, value: turn} : cell,
    )
    setBoard(newBoard)

    // Compruebo ganador o empate...
    const {winner, positions} = findWinningLine(turn, newBoard)
    if (winner) {
      setWinnerSymbol(turn)
      setShowConfetti(true)
      setBoard(prev => winnerPosition(prev, positions))
      // actualizo marcador...
      return
    }
    if (newBoard.every(c => c.value !== '')) {
      setIsTie(true)
      return
    }

    // Cambio de turno para la siguiente jugada
    setTurn(t => (t === 'x' ? 'o' : 'x'))
  }

  return (
    <div className="contain-game-board">
      {showConfetti && <WinnerConfetti />}

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

      {isTie && !winnerSymbol && (
        <Modal>
          <ModalTied onClick={handleReset} />
        </Modal>
      )}

      {showRestartModal && (
        <Modal>
          <ModalReststart
            onConfirm={handleReset}
            onCancel={closeRestartModal}
          />
        </Modal>
      )}

      {turn && (
        <ContainRestartTurn
          value={winnerSymbol ?? (isTie ? '' : turn)}
          onRestartClick={openRestartModal}
        />
      )}

      {/* Aquí pasamos `turn` al Board */}
      <Board
        board={board}
        handleCellClick={handleCellClick}
        playerTurn={turn}
      />

      <ContainScoreGame
        playerXWin={playerXWin}
        playerOWin={playerOWin}
        ties={tieCount}
      />
    </div>
  )
}
