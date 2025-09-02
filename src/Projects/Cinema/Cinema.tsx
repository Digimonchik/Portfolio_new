

import * as React from 'react';
import './cinema.scss';
import '../../store/reduxStore/hooks.ts'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchFilms } from '../../store/reduxStore/cinemaSlice';
import { fetchMovieFullInfo } from '../../store/reduxStore/movieSlice.ts';
import type { AppDispatch } from '../../store/reduxStore/store';
import TopBar from '../../Components/TopBar/TopBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

interface ICinemaProps {
}

const Cinema: React.FunctionComponent<ICinemaProps> = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFilms())


    }, [dispatch]);

    const storedFilms = useSelector((state: any) => state.films.films);
    const movieInfo = useSelector((state: any) => state.movie)


    const handleFetch = (id) => {
        dispatch(fetchMovieFullInfo(id))
        console.log(movieInfo)

    }


    return <div className='movies__page'>
        <TopBar></TopBar>
        <div className='movies__container'>
            {storedFilms.length > 0 && storedFilms.map((el: any, index) =>


                <div className='movies__movie' key={el.id}>
                    <Link to={`${el.id}`}><img onClick={() => handleFetch(el.id)} className='movies__movie_img' src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} />
                    </Link>
                    <div className="movies__movie_text name">{el.original_title}</div>
                    <div className="movies__movie_text rating">{el.vote_average}</div>

                </div>)}
        </div>
        <Footer></Footer>
    </div>;
};

export default Cinema;
