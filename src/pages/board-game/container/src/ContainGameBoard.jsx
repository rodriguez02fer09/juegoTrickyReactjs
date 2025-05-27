// src/components/contain-game-board/src/ContainGameBoard.jsx
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

  // Inicializo turno y tablero al cambiar selección de jugador:
  useEffect(() => {
    if (playerChoice === 'x' || playerChoice === 'o') {
      setTurn(playerChoice)
      setBoard(emptyBoard)
    }
  }, [playerChoice])

  // **Cuando X+O+Empates llega a 8, reseteo sólo esos contadores**:
  useEffect(() => {
    if (playerXWin + playerOWin + tieCount >= 8) {
      setPlayerXWin(0)
      setPlayerOWin(0)
      setTieCount(0)
    }
  }, [playerXWin, playerOWin, tieCount])

  const resetRound = () => {
    setBoard(emptyBoard)
    setTurn(playerChoice || '')
    setWinnerSymbol(null)
    setIsTie(false)
    setShowConfetti(false)
    setShowRestartModal(false)
  }

  const openRestartModal = () => setShowRestartModal(true)
  const closeRestartModal = () => setShowRestartModal(false)

  const handleCellClick = idx => {
    if (!turn || winnerSymbol || isTie || board[idx].value) return

    // Pinto la casilla
    const newBoard = board.map(cell =>
      cell.index === idx ? {...cell, value: turn} : cell,
    )
    setBoard(newBoard)

    // Compruebo ganador
    const {winner, positions} = findWinningLine(turn, newBoard)
    if (winner) {
      setWinnerSymbol(turn)
      setShowConfetti(true)
      setBoard(prev => winnerPosition(prev, positions))
      // Incremento marcador
      if (turn === 'x') setPlayerXWin(px => px + 1)
      else setPlayerOWin(po => po + 1)
      return
    }

    // Compruebo empate
    if (newBoard.every(c => c.value !== '')) {
      setIsTie(true)
      setTieCount(tc => tc + 1)
      return
    }

    // Cambio de turno
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
            onClick={resetRound}
          />
        </Modal>
      )}

      {isTie && !winnerSymbol && (
        <Modal>
          <ModalTied onClick={resetRound} />
        </Modal>
      )}

      {showRestartModal && (
        <Modal>
          <ModalReststart onConfirm={resetRound} onCancel={closeRestartModal} />
        </Modal>
      )}

      {turn && (
        <ContainRestartTurn
          value={winnerSymbol ?? (isTie ? '' : turn)}
          onRestartClick={openRestartModal}
        />
      )}

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
