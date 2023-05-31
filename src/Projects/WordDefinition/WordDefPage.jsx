import React, {useState} from 'react';
import TopBar from '../../Components/TopBar';
import Footer from '../../Components/Footer';

const WordDefPage = () => {

    const [isOpen, setOpen] = useState(false);

     
    return (
        <div className='word-page'>
            <TopBar/>
            <div className='word-page__container'>
            <div className='word-page__find'>
                <input className ='word-page__find_input'></input>
                <div className='word-page__find_button'>Find word</div>
            </div>
            <div className='word-page__transcript'>
               <div className='word-page__transcript_word'></div>
               <div className='word-page__transcript_letters'></div>
            </div>
            <div className={isOpen? `word-page__definitions_button isclosed`: `word-page__definitions_button isopen`} onClick={() => setOpen(!isOpen)}>open definitions</div>
            <div className={isOpen ? 'word-page__definitions' : 'word-page__definitions hiden'}>
                <div className='word-page__definitions_definition'>
                    Это определение
                </div>
                <div className='word-page__definitions_definition'>
                    Это определение
                </div>
                <div className='word-page__definitions_definition'>
                    Это определение
                </div>
                <div className='word-page__definitions_definition'>
                    Это определение
                </div>
                
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default WordDefPage;