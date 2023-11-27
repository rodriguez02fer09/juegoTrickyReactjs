import '../styles/desktop.scss'
import {useState} from 'react'
import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'
import {useContext} from 'react'
import {TrickyContext} from '../../../../Context'
import {
  getByColumn,
  winnerAllColumns,
  winer,
  getByRow,
  wionnerAllRows,
  getRigthDiagonal,
  getDiagonalLeft,
} from '../../../../utils/index'
import Confetti from '../../../board-game/components/winnwr-confetti/index'

const ContainGameBoard = ({size}) => {
  const initialBoard = [
    {p: '0,0', value: '', index: '0', selected: false},
    {p: '0,1', value: '', index: '1', selected: false},
    {p: '0,2', value: '', index: '2', selected: false},
    {p: '1,0', value: '', index: '3', selected: false},
    {p: '1,1', value: '', index: '4', selected: false},
    {p: '1,2', value: '', index: '5', selected: false},
    {p: '2,0', value: '', index: '6', selected: false},
    {p: '2,1', value: '', index: '7', selected: false},
    {p: '2,2', value: '', index: '8', selected: false},
  ]

  const [board, setBoard] = useState(initialBoard)
  const [winner, setWinner] = useState(false)
  const {getPlayerSelect, selecPlayer} = useContext(TrickyContext)
  const currentPlayer = getPlayerSelect()

  const upDateBoard = i => {
    const newBoard = [...board]
    newBoard[i].value = currentPlayer
    newBoard[i].selected = true
    setBoard(newBoard)
  }

  const winnerPlayer = () => {
    if (winnerAllColumns(currentPlayer, board)) {
      console.log('ganador')
      setWinner(true)
    }
    if (wionnerAllRows(currentPlayer, board)) {
      console.log('ganador')
      setWinner(true)
    }
    if (winer(getRigthDiagonal(board), currentPlayer)) {
      console.log('ganador')
      setWinner(true)
    }
    if (winer(getDiagonalLeft(board), currentPlayer)) {
      console.log('ganador')
      setWinner(true)
    }
  }

  const swichPlayer = () => {
    if (currentPlayer === 'o') {
      selecPlayer('x')
    }
    if (currentPlayer === 'x') {
      selecPlayer('o')
    }
  }
  const handleCellClick = i => {
    if (winner) {
      return false
    }
    //actualizar el tablero
    upDateBoard(i)
    //intercala los jugadores
    swichPlayer()
    //ganador
    winnerPlayer()
  }

  const handleReset = () => {
    setBoard(initialBoard)
    setWinner(false)
  }

  return (
    <div className="contain-game-board">
      {winner && <Confetti />}
      <ContainRestartTurn value={currentPlayer} handleReset={handleReset} />
      <Board board={board} handleCellClick={handleCellClick} />
      <ContainScoreGame />
    </div>
  )
}

export default ContainGameBoard
