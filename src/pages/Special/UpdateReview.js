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
                    navigate("/myreviews");
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
                <div className="relative">
                    <textarea id="reviewtext" type="text" name="reviewtext" rows="3" placeholder="Write your message" class="relative w-full p-4 placeholder-transparent peer border-slate-200" defaultValue={review.reviewtext}></textarea>
                    <label for="id-l02" class="absolute left-2 -top-2 z-[1] px-2 text-xs ">
                        Write your message
                    </label>
                </div>
                <button type="submit" className="w-md px-6 py-2.5">Update review</button>
            </form>

        </div>
    )

};

export default UpdateReview;