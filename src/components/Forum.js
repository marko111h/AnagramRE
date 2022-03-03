import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import classes from './Forum.module.css'

const Forum = (props) => {
  const [prvaRec, setPrvaRec] = useState('')
  const [drugaRec, setDrugaRec] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (prvaRec.trim().length === 0 || drugaRec.trim() === 0) {
      return
    }
    
    const proveravamo = (a, b) => {
      const p = a.toLowerCase().split('').sort().join('')
      const d = b.toLowerCase().split('').sort().join('')
      let x = p.length
      let y = d.length
      
      if (x === y) {
        for (let i = 0; i < x; i++) {
          if (p[i] !== d[i]) {
            return false
          }
      }
      
    }else{
      return false
    }
  }
    const e = proveravamo(prvaRec, drugaRec)
    if (e === false) {
      
      alert('Nije Anagram')

     
    } else {
      alert("Zadata rec je Anagram")
       props.onAddAnagram(prvaRec, drugaRec)

    }

    setPrvaRec('')
    setDrugaRec('')
  }

  const firstWord = (event) => {
    setPrvaRec(event.target.value)
  }
  const secoundWord = (event) => {
    setDrugaRec(event.target.value)
  }
  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="prvarec">Prva rec</label>
          <input type="text" value={prvaRec} onChange={firstWord}></input>
          <label htmlFor="prvarec">Druga Rec</label>
          <input type="text" value={drugaRec} onChange={secoundWord}></input>
          <Button type="submit">Check</Button>
        </form>
      </Card>
    </div>
  )
}

export default Forum
