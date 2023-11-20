import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './common/components/layout'
import ContainSelectPlayer from './pages/start-game/container'
import ContainGameBoard from './pages/board-game/container'
import {TrickyProvider} from './Context'
import './App.scss'

const App = () => {
  return (
    <TrickyProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ContainSelectPlayer />} />
            <Route
              path="/gameBoard"
              element={<ContainGameBoard size={'large'} />}
            />
          </Routes>
        </Layout>
      </Router>
    </TrickyProvider>
  )
}
export default App
