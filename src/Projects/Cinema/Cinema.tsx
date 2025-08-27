import * as React from 'react';
import { useState } from 'react';

interface ICinemaProps {
}

const Cinema: React.FunctionComponent<ICinemaProps> = () => {

    const [films, setFilms] = useState([])


    return <div>Cinema Component</div>;
};

export default Cinema;
