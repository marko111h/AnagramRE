import React, { useState } from 'react'
import Forum from './components/Forum'
import AnagramList from './components/AnagramList'
import './App.css'

function App() {
  const [anagramsList, setAnagramsList] = useState([])
  const addAnagramHandler = (prvaR, drugaR) => {
    setAnagramsList((prevAnagramList) => {
      return [...prevAnagramList, { prvarec: prvaR, drugarec: drugaR }]
    })
  }
  return (
    <div className="App">
      <Forum onAddAnagram={addAnagramHandler}></Forum>
      <AnagramList anagrams={anagramsList}></AnagramList>
    </div>
  )
}

export default App
