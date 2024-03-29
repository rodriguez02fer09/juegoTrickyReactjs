import '../styles/desktop.scss'
import {useState} from 'react'
import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'
import {
  getByColumn,
  winnerAllColumns,
  winer,
  getByRow,
  wionnerAllRows,
  getRigthDiagonal,
  getDiagonalLeft,
  winnerPosition,
} from '../../../../utils/index'
import Confetti from '../../../board-game/components/winnwr-confetti/index'
import Modal from '../../../../common/components/modal/src/Modal'
import ReportGame from '../../../../common/components/reportGame/src/ReportGame'
import ModalReststart from '../../../../common/components/modal-reststart/src/ModalReststart'
import ModalTied from '../../../../common/components/modal-tied/src/ModalTied'

const ContainGameBoard = ({
  type,
  label,
  textReport,
  takeRound,
  value,
  onClick,
}) => {
  const initialBoard = [
    {p: '0,0', value: '', index: '0', selected: false, winner: false},
    {p: '0,1', value: '', index: '1', selected: false, winner: false},
    {p: '0,2', value: '', index: '2', selected: false, winner: false},
    {p: '1,0', value: '', index: '3', selected: false, winner: false},
    {p: '1,1', value: '', index: '4', selected: false, winner: false},
    {p: '1,2', value: '', index: '5', selected: false, winner: false},
    {p: '2,0', value: '', index: '6', selected: false, winner: false},
    {p: '2,1', value: '', index: '7', selected: false, winner: false},
    {p: '2,2', value: '', index: '8', selected: false, winner: false},
  ]

  const [board, setBoard] = useState(initialBoard)

  const [winner, setWinner] = useState(false)

  const [playerXWin, setPlayerXWin] = useState(0)
  const [playerOWin, setPlayerOWin] = useState(0)

  // const upDateBoard = i => {
  //   const newBoard = [...board]
  //   newBoard[i].value = currentPlayer
  //   newBoard[i].selected = true
  //   setBoard(newBoard)
  // }
  // const prevPlayerWins = winnerPlayer => {
  //   if (currentPlayer === 'x') {
  //     setPlayerXWin(state => state + 1)
  //   }
  //   if (currentPlayer === 'o') {
  //     setPlayerOWin(state => state + 1)
  //   }
  // }
  // const winnerPlayer = () => {
  //   if (
  //     winnerAllColumns(currentPlayer, board) ||
  //     wionnerAllRows(currentPlayer, board) ||
  //     winer(getRigthDiagonal(board), currentPlayer) ||
  //     winer(getDiagonalLeft(board), currentPlayer)
  //   ) {
  //     console.log('ganador')
  //     setWinner(() => true)
  //     prevPlayerWins(currentPlayer)
  //   }
  // }

  // const swichPlayer = () => {
  //   if (!winner) {
  //     // Verifica si NO hay un ganador
  //     if (currentPlayer === 'o') {
  //       selecPlayer('x')
  //     } else if (currentPlayer === 'x') {
  //       selecPlayer('o')
  //     }
  //   }
  // }

  // const handleCellClick = i => {
  //   if (winner) {
  //     return false
  //   }
  //   //actualizar el tablero
  //   upDateBoard(i)
  //   //intercala los jugadores
  //   swichPlayer()
  //   //ganador
  //   winnerPlayer()
  // }

  // const handleReset = () => {
  //   setBoard(initialBoard)
  //   setWinner(false)
  // }

  // const handleNextRound = () => {
  //   setBoard(() => initialBoard)
  //   setWinner(state => !state)
  //   console.log('click')
  // }

  const showResetModal = () => {
    setShowModal(true)
  }

  return (
    <div className="contain-game-board">
      {winner && <Confetti />}
      {winner && (
        <Modal>
          <ReportGame
            takeRound="TAKES THE ROUND"
            textReport="YOU WON!"
            type={type}
            label={label}
            value={currentPlayer}
            //onClick={handleNextRound}
          />
        </Modal>
      )}
      {showModal && (
        <Modal>
          <ModalReststart type={type} label={label} onClick={handleReset} />
        </Modal>
      )}
      {isTied && (
        <Modal>
          <ModalTied type={type} label={label} onClick={handleNextRound} />
        </Modal>
      )}

      <ContainRestartTurn
      //value={winner ? ('x' === currentPlayer ? 'o' : 'x') : currentPlayer}
      //handleReset={handleReset}
      />
      <Board
        board={board}
        // handleCellClick={handleCellClick}
      />
      <ContainScoreGame playerXWin={playerXWin} playerOWin={playerOWin} />
    </div>
  )
}

export default ContainGameBoard
