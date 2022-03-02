import React from 'react'
import Card from './Card'
import classes from './AnagramList.module.css'

const AnagramList = (props) => {
  return (
    <Card className={classes.anagrams}>
      <ul>
        {props.anagrams.map((anagram) => (
          <li>
            {anagram.prvarec} {anagram.drugarec}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default AnagramList
