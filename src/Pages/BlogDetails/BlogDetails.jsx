import { useParams } from 'react-router-dom';
import blog from '../../assets/img/banner/b8.jpg'
import { useQuery } from '@tanstack/react-query';

const BlogDetails = () => {
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/blogs/${id}`)
            return res.json()
        }
    })

    return (
        <div className="pt-12 lg:pt-16 mb-16">
            <div className="hero h-[300px] mb-10" style={{ backgroundImage: `url(${blog})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">#blog</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 mx-9'>
                <img className='w-[600px] h-[480px] mx-auto rounded-md' src={data?.image} alt="" />
                <div>
                    <p className='text-3xl font-bold mb-5'>{data?.title}</p>
                    <p className='text-xl text-justify'>{data?.blog}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;