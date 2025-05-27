// src/App.jsx
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './common/components/layout'
import ContainSelectPlayer from './pages/start-game/container'
import ContainGameBoard from './pages/board-game/container'
import './App.scss'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContainSelectPlayer />} />
          <Route
            path="/gameBoard"
            element={<ContainGameBoard size="large" />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}
