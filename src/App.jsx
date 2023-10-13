import './App.scss'
import Layout from './common/components/layout'
import ContainSelectPlayer from './pages/start-game/container'

const players = [
  {value: 'x', selected: true},
  {value: 'o', selected: false},
]

function App() {
  return (
    <>
      <Layout>
        <ContainSelectPlayer players={players} />
      </Layout>
    </>
  )
}

export default App
