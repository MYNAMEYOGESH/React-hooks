import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu'
import Container from './pages/Container'
import Menu1 from './pages/Menu1'

function App() {
  return (
    <BrowserRouter>
        <Menu1/>
        <Container />
    </BrowserRouter>
  )
}

export default App
