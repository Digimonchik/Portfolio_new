import './Keyboard.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

const HangManKeyboard = ({activeLetters, inactiveLetters, setLetter, disabled}) => {
    return (
    
        <div className='hangman__keyboard_key'>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key)
            
          return <button disabled = {disabled} onClick = {() => setLetter(key)} key = {key} className = {`btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`} >{key}</button>
})}
        </div>
    )
}
export default HangManKeyboard