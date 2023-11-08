import './App.scss'
import Layout from './common/components/layout'
//import ContainSelectPlayer from './pages/start-game/container'
import ContainGameBoard from './pages/board-game/container'
const players = [
  {value: 'x', selected: true},
  {value: 'o', selected: false},
]

function App() {
  return (
    <>
      <Layout>
        {/* <ContainSelectPlayer players={players} /> */}
        <ContainGameBoard
          players={players}
          playerTurn="x"
          value={'x'}
          size={'large'}
        />
      </Layout>
    </>
  )
}

export default App
