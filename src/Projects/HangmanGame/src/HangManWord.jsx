import React from "react";

const HangManWord = ({guessedLetters, word, incorectLetters, reveal}) => {
    console.log(incorectLetters)
    return (
        <div className="hangman__word">
            {word.split("").map( (letter, index) => 
                <span key = {index} style = {
                    {
                       borderBottom: '.05em solid black',
                       color: !guessedLetters.includes(letter) ? 'red' : 'black'
                    }
                }>
                    <span style = { {
                        visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
                    }
                    }>{letter}</span>
                    </span>
            )}
        </div>
    )
}

export default HangManWord