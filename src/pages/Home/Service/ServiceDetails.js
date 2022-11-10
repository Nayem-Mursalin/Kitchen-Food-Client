import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { name, picture, price, description } = useLoaderData();
    return (
        <div>
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
                <p>Go to <Link to='/myreview'>review</Link> Page</p>
            </div>
        </div>

    );
};

export default ServiceDetails;