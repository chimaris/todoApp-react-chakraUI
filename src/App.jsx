import React from 'react'
import Features from './components/Features'
import Header from './components/Header'
import Pricing from './components/Pricing'

import './App.css'
import Todo from './components/Todo/Todo'


function App() {

  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
      <Todo />
    </div>
  )
}

export default App
