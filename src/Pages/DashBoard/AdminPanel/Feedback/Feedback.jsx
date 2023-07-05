import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Feedback = () => {

    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:3000/product/${id}`)
            return data.json()
        }
    })

    function feedbackHandler(e) {
        e.preventDefault()
        const feedback = e.target.feedback.value
        axiosSecure.patch(`/feedbackProduct/${id}`, { feedback: feedback , fb:"true"})
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have given feedback successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className=" flex flex-col lg:flex-row items-center gap-10 mb-10 w-[95%] mx-auto">
                <div>
                    <img className="rounded-xl w-full lg:w-[950px] lg:h-[300px]" src={data?.img} alt="" />
                </div>
                <div className="space-y-3">
                    <p className="font-bold">Brand : {data?.brand}</p>
                    <p className="font-bold">Product Name : {data?.productName}</p>
                    <p className="font-bold">Price : ${data?.price}</p>
                    <p className="font-bold">Product Details : </p>
                    <p className="text-justify">{data?.productDetails}</p>
                </div>
            </div>

            <h2 className="mb-4 text-xl font-bold text-center uppercase">Give Feedback</h2>

            <form onSubmit={feedbackHandler}>

                <textarea name="feedback" className="textarea textarea-bordered w-full" placeholder="Write your feedback here......."></textarea>

                <button className="px-5 py-2 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-900 mt-9 uppercase">send feedback</button>
            </form>
        </div>
    );
};

export default Feedback;