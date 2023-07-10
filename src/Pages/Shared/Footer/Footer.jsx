import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import { BsGithub ,BsFacebook , BsLinkedin , BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="bg-[#acbebf] font-semibold shadow-xl">
            <footer>
                <div className='flex flex-col justify-center items-center pt-6'>
                    <img src={logo} alt="logo" />
                    <p className='my-3 text-center'>Glamour Attire providing reliable clothes since 2020</p>
                </div>
                <div className="footer p-10 text-base-content lg:ms-24">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/shop' className="link link-hover">Shop</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/blog' className="link link-hover">Blogs</Link>
                        <Link to='/about' className="link link-hover">About</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                    </div>
                    <div>
                        <span className="footer-title">Social Site</span>
                        <div className="grid grid-flow-col gap-4">
                            
                            <Link to='https://github.com/KhanZiaul'><BsGithub className='w-6 h-6 cursor-pointer'></BsGithub></Link>
                            
                            <Link to='https://www.facebook.com/profile.php?id=100006621013410'><BsFacebook className='w-6 h-6 cursor-pointer'></BsFacebook></Link>

                            <Link to='https://www.linkedin.com/in/khan-ziaul-hasan-64299320a/'><BsLinkedin className='w-6 h-6 cursor-pointer'></BsLinkedin></Link>

                            <Link to='https://twitter.com/KhanZia07'><BsTwitter className='w-6 h-6 cursor-pointer'></BsTwitter></Link>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <p>Copyright © 2023 - All right reserved by GLAMOUR ATTIRE</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;