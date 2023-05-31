import React, {useState} from 'react';

const Layout = () => {

const [ishidden, sethidden] = useState(false)

    return (
        <div className='layout'>
            <div className='layout__image'/>
            <div className='layout__container'>
            <h1 className = 'layout__header' onClick={() => sethidden(!ishidden)}>Нажми чтобы открыть меню </h1>
            <div className = {ishidden ? 'layout-popup hidden' : 'layout-popup'}>
                <div className='layout__description'>Тут будет описание</div>   
                <div className='layout__links'>
                    <div className='layout__links_link'>ссылка</div>
                    <div className='layout__links_link'>ссылка</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Layout;