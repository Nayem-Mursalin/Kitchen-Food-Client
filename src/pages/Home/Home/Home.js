import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;