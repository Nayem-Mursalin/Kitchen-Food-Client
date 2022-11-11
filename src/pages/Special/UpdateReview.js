import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const UpdateReview = () => {
    const router = useParams();
    const [review, setReview] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const { id } = router;
    const navigate = useNavigate();
    // to get data feom the db
    useEffect(() => {
        fetch(`https://kitchen-food-server-nayem-mursalin.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReview(data.data)
                    console.log(data.data);
                }

                else {
                    alert(data.message)
                }
            })
            .catch(err => alert(err.message))

    }, [refresh, id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewtextUpdated = {
            reviewtext: e.target.reviewtext.value
        }

        fetch(`https://kitchen-food-server-nayem-mursalin.vercel.app/reviews/${id}`, {

            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewtextUpdated)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    navigate("/reviews");
                }
                else {
                    alert(data.error)
                }
            })
            .catch(err => alert(err.message))



    }

    return (
        <div className="min-h-screen">
            <h1 className="text-3xl font-semibold my-12">Here are the reviews you wrote so far</h1>

            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                <div class="relative">
                    <textarea id="reviewtext" type="text" name="reviewtext" rows="3" placeholder="Write your message" class="relative w-full p-4 placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" defaultValue={review.reviewtext}></textarea>
                    <label for="id-l02" class="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\u00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Write your message
                    </label>
                </div>
                <button type="submit" class="
          w-md
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          ease-in-out">Update review</button>
            </form>

        </div>
    )

};

export default UpdateReview;