import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyReview from '../../Special/AddReview';

const ServiceDetails = () => {
    const { name, picture, price, description } = useLoaderData();
    return (
        <div className='mb-100'>
            <div className="card text-center card-compact w-200 bg-base-100 shadow-xl m-50 ">
                <figure><img className='max-w-md' src={picture} alt="Food" /></figure>
                <div className="card-body">
                    <p className=" text-3xl font-bold"> Name: {name}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p className='text-2xl'>Description: {description}</p>
                </div>
            </div>
            <div className='card card-compact w-250 my-50 pt-50'>
                <h2 className='mt-50'>Review Section:</h2><br></br>
                <p>to See your Review Go to <Link to='/myreview'><button className='btn btn-primary'>Review</button></Link> Page</p>
                <MyReview></MyReview>
            </div>
        </div>

    );
};

export default ServiceDetails;