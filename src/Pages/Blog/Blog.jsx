import bgImage from '../../assets/img/banner/b19.jpg'
import blog1 from '../../assets/img/blog/b1.jpg'
import blog2 from '../../assets/img/blog/b2.jpg'
import blog3 from '../../assets/img/blog/b3.jpg'
import blog4 from '../../assets/img/blog/b4.jpg'
import blog5 from '../../assets/img/blog/b5.jpg'
import blog6 from '../../assets/img/blog/b6.jpg'
import blog7 from '../../assets/img/blog/b7.jpg'

const Blog = () => {
    const blogs = [
        {image:blog1,title:'The Cotton-Jercy Zip-up-Hoodie'},
        {image:blog2,title:'How to Style a Quiff'},
        {image:blog3,title:'Must-Have Skater Girl Items'},
        {image:blog4,title:'Runway-Inspired Trends'},
        {image:blog5,title:'AW20 Menswear Trends'},
        {image:blog6,title:'The Cotton-Jercy Zip-up-Hoodie'},
        {image:blog7,title:'The Cotton-Jercy Zip-up-Hoodie'},
    ]
    return (
        <div className="pt-16 mb-10">
            <div className="hero h-[300px]" style={{backgroundImage:`url(${bgImage})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">#readmore</h1>
                        <p className="mb-5">Read all case studies about our products!</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;