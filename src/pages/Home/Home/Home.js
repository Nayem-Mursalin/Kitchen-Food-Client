import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ShortServices from "../Service/ShortServices";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ShortServices></ShortServices>
            <button className='btn btn-red-600 center'><Link to='/services'>See All</Link></button>
        </div>
    );
};

export default Home;