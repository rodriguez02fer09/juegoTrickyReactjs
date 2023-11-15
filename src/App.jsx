import './App.scss'
import Layout from './common/components/layout'
import ContainSelectPlayer from './pages/start-game/container'
//import ContainGameBoard from './pages/board-game/container'
import {TrickyProvider} from './Context'

const App = () => {
  return (
    <>
      <TrickyProvider>
        <Layout>
          <ContainSelectPlayer />

          {/* <ContainGameBoard
            playerTurn="x"
            value={'x'}
            size={'large'}
          /> */}
        </Layout>
      </TrickyProvider>
    </>
  )
}

export default App
