import { useState, useCallback, useEffect} from 'react'
import words from './wordsToGuess.json'
import HangManDrawing from './HangManDrawing'
import HangManWord from './HangManWord'
import HangManKeyboard from './HangManKeyboard'




const HangmanGame = () =>  {


const [wordToGuess, setWordToGuess] = useState(
  () => {
    return words[Math.floor(Math.random() * words.length)]
  }
)

const [guessedLetters, setGuessedLetters] = useState([])

const incorectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  
const isLoser = incorectLetters.length >=7;
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));



const addGuessedLetter = useCallback(
  (letter) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
    console.log(guessedLetters)
  },
  [guessedLetters, isWinner, isLoser]
)

useEffect(() => {
  const handler = (e) => {
    const key = e.key
    if (!key.match(/^[a-z]$/)) return

    e.preventDefault()
    addGuessedLetter(key)
  }

  document.addEventListener("keypress", handler)

  return () => {
    document.removeEventListener("keypress", handler)
  }
}, [guessedLetters])


return (
<div className = 'hangman'>
      <div className = 'hangman__container'>
      
      
      <div className='hangman__message'>
        
      {isWinner && 'Winner'}
      {isLoser && 'Nice try - refresh to play again'}
      
      </div>


      <HangManDrawing numberOfGuesses = {incorectLetters.length} />
      <HangManWord guessedLetters={guessedLetters} word = {wordToGuess} incorectLetters = {incorectLetters} reveal = {isWinner || isLoser} />
      <div className= 'hangman__keyboard'>
      <HangManKeyboard
      disabled = {isWinner || isLoser}
      activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters = {incorectLetters}
      setLetter = {addGuessedLetter}
      /></div>
      </div>
      </div>
  );
}

export default HangmanGame;
