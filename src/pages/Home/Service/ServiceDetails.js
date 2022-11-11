import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyReview from '../../Special/AddReview';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AllReview from '../../Special/AllReview';
import useTitle from '../../../Hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Services Details');
    const { name, picture, price, description } = useLoaderData();
    return (
        <div className='mb-100'>
            <div className="card text-center card-compact w-200 bg-base-100 shadow-xl m-50 ">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <figure><img className='max-w-md' src={picture} alt="Food" /></figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <p className=" text-3xl font-bold"> Name: {name}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p className='text-2xl'>Description: {description}</p>
                </div>
            </div>
            <div className='card card-compact w-250 my-50 pt-50'>
                <h2 className='mt-50'>Review Section:</h2><br></br>
                <p>to See your Review Go to <Link to='/myreview'><button className='btn btn-primary'>Review</button></Link> Page</p>
                <AllReview></AllReview>
                <MyReview></MyReview>

            </div>
        </div>

    );
};

export default ServiceDetails;