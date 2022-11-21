import React from 'react'
import Features from './components/Features'
import Header from './components/Header'
import Pricing from './components/Pricing'

import './App.css'
import Todo from './components/Todo/Todo'
import Vote from './components/Voting/Vote'
import VoteProvider from './context/VoteProvider'


function App() {

  return (
    <div className="App">
      {/* <Header />
      <Pricing />
      <Features /> */}
      <VoteProvider>
        <Vote />
      </VoteProvider>

      <Todo />
    </div>
  )
}

export default App
