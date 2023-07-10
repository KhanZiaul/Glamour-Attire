import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (

        <div className='my-10 border-2 p-10 mx-4'>

            <p className='text-3xl font-semibold text-center my-4'>Terms and Conditions</p>

            1. Acceptable Use Policy: This outlines the terms and conditions for using the news site, including any restrictions on content and behavior. <br />

            2. User Conduct: This specifies the types of behavior that are not allowed on the news site, such as hate speech, harassment, or defamation. <br />

            3. User Content: This outlines the rules and regulations for user-generated content, such as comments or submissions, including any restrictions on content and ownership. <br />

            4. Intellectual Property Rights: This outlines the ownership and usage rights of any intellectual property, such as articles, photos, or videos published on the news site. <br />

            5. Privacy Policy: This outlines how the news site collects, uses, and protects user data, including any third-party services that may be used. <br />

            6. Termination Clause: This outlines the terms and conditions for terminating the user's account or access to the news site, such as breach of contract or non-payment. <br />

            7. Liability Limitations: This limits the liability of the news site for any damages or losses incurred by the user. <br />

            8. Governing Law: This specifies which laws and regulations govern the agreement and any disputes that may arise. <br />

            It's important to carefully read and understand the terms and conditions

            <p className='my-7 underline text-sky-500 text-right'><Link to='/register'>Go Back Register</Link></p>

        </div>
    );
};

export default TermsConditions;