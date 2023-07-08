import blog from '../../assets/img/banner/b8.jpg'

const BlogDetails = () => {
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
            <div>

            </div>
        </div>
    );
};

export default BlogDetails;