import { Link, useLocation } from 'react-router-dom'
import bgImage from '../../assets/img/banner/b19.jpg'
import { useQuery } from '@tanstack/react-query';
import { ScaleLoader } from 'react-spinners';
import useTitle from '../../CustomHook/useTitle/useTitle';
import useScroll from '../../CustomHook/useScroll/useScroll';

const Blog = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Blogs')
    const { data } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://glamour-attire.vercel.app/blogs')
            return res.json()
        }
    })
    
    if (!Array.isArray(data)) {
        return (
            <div className='h-[100vh] flex justify-center items-center'>
                <ScaleLoader
                    color="#3641d6"
                    height={100}
                    margin={10}
                    radius={10}
                    width={4}
                />
            </div>
        )
    }

    return (
        <div className="pt-12 lg:pt-16 mb-10">
            <div className="hero h-[300px]" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">#readmore</h1>
                        <p className="mb-5">Read all case studies about our products!</p>
                    </div>
                </div>
            </div>
            <div className='my-16'>
                {
                    data?.map((blog, index) => {
                        return (
                            <div key={index}>
                                <div className='flex flex-col lg:flex-row justify-center gap-10 mb-8 items-center'>
                                    <div>
                                        <img className='w-[350px] h-[350px]' src={blog?.image} alt="" />
                                    </div>
                                    <div className='w-[90%] lg:w-[50%] space-y-4'>
                                        <p className='text-2xl font-bold'>{blog?.title}</p>
                                        <p className='text-justify'>{blog?.blog?.slice(0, 200)}...</p>

                                        <div>
                                            <Link to={`/blogDetails/${blog?._id}`}>
                                                <p className='font-bold uppercase text-blue-700 cursor-pointer'>Continue Reading</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blog;