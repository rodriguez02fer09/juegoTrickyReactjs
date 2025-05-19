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
import {useSelector} from 'react-redux'
const ContainGameBoard = ({textReport, takeRound, value, onClick}) => {
  const initialBoard = useSelector(state => state.board)

  const currentPlayer = useSelector(state =>
    state.players.find(player => player.selected),
  )

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
      {/* {showModal && (
        <Modal>
          <ModalReststart type={type} label={label} onClick={handleReset} />
        </Modal>
      )}
      {isTied && (
        <Modal>
          <ModalTied type={type} label={label} onClick={handleNextRound} />
        </Modal>
      )} */}

      <ContainRestartTurn
        //value={winner ? ('x' === currentPlayer ? 'o' : 'x') : currentPlayer}
        //handleReset={handleReset}
        value={currentPlayer.value}
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
