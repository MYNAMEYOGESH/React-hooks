import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu'
import Container from './pages/Container'

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Container />
    </BrowserRouter>
  )
}

export default App
