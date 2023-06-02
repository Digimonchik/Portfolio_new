import React from 'react';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

const Contacts = () => {


    const location = useLocation();

    const currentPath = location.pathname;

    

    return (
        <div className='contacts'>
        {currentPath === '/contacts' ? '' : <h1 className='contacts__header'>Contacts</h1>}
        <div className='contacts__container'>
            <Contact text = '+38 (063) 794-67-72' icon = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png'></Contact>
            <Contact text ='Digimonchik' icon ='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'></Contact>
            <Contact text = 'da.logvinenko@gmail.com' icon = 'https://totalpng.com/download/yzUc9iCuMdSOtobrm2AnbV8fk2H6x2s6ruVN2KEtRe6lfg9k8x5xKxAGWQPYwIB7fDPzqv8ba4CCMnqGuWRpDEKEA7K6PsuvIcAnVhP6YSMienXMQHtNpRhlek5z4t6S2nJwkSJae5psc9sUcQ7iUKiGOMfyGQB43eXuzklnncdT2NUkBTVj9Do3wK2Qs9KRWwobhy5M/large'></Contact>
            <Contact text = 'dilogvin' icon ='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'></Contact>
        </div>
        </div>
    );
};

export default Contacts;