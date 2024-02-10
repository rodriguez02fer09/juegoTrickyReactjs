import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './common/components/layout'
import ContainSelectPlayer from './pages/start-game/container'
import ContainGameBoard from './pages/board-game/container'
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
export default App
