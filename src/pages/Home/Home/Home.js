import React from 'react';
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
        </div>
    );
};

export default Home;