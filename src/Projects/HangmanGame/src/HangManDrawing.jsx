import React from "react";

const HangManDrawing = ({numberOfGuesses}) => {

    const HEAD = (
        <div key = 'head'
          className="body-part head"
        />
      )
      
      const BODY = (
        <div key = 'body'
          className="body-part body"
        />
      )
      
      const RIGHT_ARM = (
        <div key = 'right_arm'
        className="body-part right-hand"
          
        />
      )
      
      const LEFT_ARM = (
        <div key = 'left_arm'
         className="body-part left-hand"
        />
      )
      
      const RIGHT_LEG = (
        <div key = 'right_leg'
          className='body-part right-leg'
        />
      )
      
      const LEFT_LEG = (
        <div key = 'left_leg'
         className="body-part left-leg"
        />
      )

      const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

    return (
        <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          className="construction fourth-part"
        />
        <div
          className="construction third-part"
        />
        <div
          className ='construction second-part'
        />
        <div className="construction first-part" />
      </div>
    )
}

export default HangManDrawing