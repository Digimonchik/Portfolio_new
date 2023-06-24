import React from 'react';
import { TestService } from '../Projects/TodoWithAuth/src/services/testService';

const Test = () => {

const handleClick = () => {
    TestService.test().then(promise => console.log(promise))
   
}

    return (
        <div>
            <button onClick={()=> {handleClick()}}> oooooo</button>
        </div>
    );
};

export default Test;