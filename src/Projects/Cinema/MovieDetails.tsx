import * as React from 'react';
import './movie.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import { fetchMovieFullInfo } from '../../store/reduxStore/movieSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store/reduxStore/hooks.ts';

import TopBar from '../../Components/TopBar/TopBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

interface IMovieDetailsProps {
}

const MovieDetails: React.FunctionComponent<IMovieDetailsProps> = (props) => {

    const dispatch = useAppDispatch();
    const { details, credits, status, error } = useAppSelector((state) => state.movie);


    const { id } = useParams();


    useEffect(() => {
        if (id) {
            dispatch(fetchMovieFullInfo(parseInt(id)))
            console.log(id)
            console.log(details?.homepage)
            console.log(details?.imdb_id)

        }
    }, [dispatch, id])

    return <div className='movie__page'>



        {details && <div className='movie__background' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}></div>}
        <TopBar></TopBar>
        {details && <div className="movie__container">

            <div className='movie__info_container'>
                <div className='movie__image_container'>
                    <div className="movie__info_title">{details.title}</div>
                    <img className='movie__info_image' alt='image' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}></img>
                </div>

                <div className='movie__info'>

                    <div className="movie__info_buttons"><a
                        href={details?.homepage}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="movie__info_link"
                    >movie page</a>
                        <div className="movie__info_link rating">Rating: {details.vote_average}</div>
                        <a href={`https://www.imdb.com/title/${details.imdb_id}`} className='movie__info_link imdb'>IMDB link</a>


                    </div><div className="movie__info_description">{details.overview}</div></div>
            </div>
            <div className="movie__cast_container">
                <div className='movie__cast_title'>Cast</div>
                <div className='movie__cast_actors'>
                    {credits.slice(0, 7).map(el =>
                    (<div className="movie__cast_actor">
                        <img className='movie__cast_actor--image' src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}></img>
                        <div className='movie__cast_actor--name'>{el.name}</div>
                    </div>))
                    }</div>
            </div>

        </div>}

        <Footer></Footer>
    </div >;
};

export default MovieDetails;
