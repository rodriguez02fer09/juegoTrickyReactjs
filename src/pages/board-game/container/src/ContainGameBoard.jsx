import '../styles/desktop.scss'
import {useState} from 'react'
import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'
import {useContext} from 'react'
import {TrickyContext} from '../../../../Context'

const ContainGameBoard = ({
  size,
  player,
  players,
  color,
  text,
  scorePlayers,
}) => {
  // var board = [ { p: "0,0", v: "X", index: "0" },{ p: "0,2", v: "", index: "2" },{ p: "1,0", v: "X", index: "3" },{ p: "1,1", v: "", index: "4" },{ p: "1,2", v: "", index: "5" },{ p: "2,0", v: "X", index: "6" },{ p: "2,1", v: "", index: "7" },{ p: "2,2", v: "", index: "8" }]

  const initialBoard = [
    {posicion: '0,0', value: '', index: '0'},
    {posicion: '0,1', value: '', index: '1'},
    {posicion: '0,2', value: '', index: '2'},
    {posicion: '1,0', value: '', index: '3'},
    {posicion: '1,1', value: '', index: '4'},
    {posicion: '1,2', value: '', index: '5'},
    {posicion: '2,0', value: '', index: '6'},
    {posicion: '2,1', value: '', index: '7'},
    {posicion: '2,2', value: '', index: '8'},
  ]

  const [board, setBoard] = useState(initialBoard)

  const handleCellClick = i => {
    const newBoard = [...board]
    setBoard(newBoard)
  }

  const {getPlayerSelect} = useContext(TrickyContext)

  const currentPlayer = getPlayerSelect()

  return (
    <div className="contain-game-board">
      <ContainRestartTurn
        value={currentPlayer}
        size={size}
        player={player}
        players={players}
        playerTurn={currentPlayer}
      />
      <Board
        playerTurn={currentPlayer}
        size={size}
        board={board}
        handleCellClick={handleCellClick}
      />
      <ContainScoreGame color={color} text={text} scorePlayers={scorePlayers} />
    </div>
  )
}

export default ContainGameBoard
