import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services');
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const index = form.index.value;
        const image = form.image.value;
        const name = form.Name.value;
        const price = form.price.value;
        const description = form.description.value;


        const list = {
            index,
            image,
            name,
            price,
            description,
        }

        fetch('https://kitchen-food-server-nayem-mursalin.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(list)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <form onSubmit={handleUpdate}>
            <h4 className="text-4xl">Add a new Service</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='index' type="text" placeholder="Index" className="input input-bordered w-full " />
                <input name='image' type="text" placeholder="Image Link" className="input input-bordered w-full " />
                <input name='Name' type="text" placeholder="Name" className="input input-bordered w-full " />
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " />

            </div>
            <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Description"></textarea>
            <input className='btn btn-primary' type="submit" value="Add this Service" />
        </form>
    );
};

export default AddServices;