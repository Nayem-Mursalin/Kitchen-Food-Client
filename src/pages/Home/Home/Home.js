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
            <ShortServices></ShortServices><br></br><br></br>
            <button className='ml-100 btn btn-zinc-50 center'><Link to='/services'>See All</Link></button><br></br><br></br>
        </div>
    );
};

export default Home;