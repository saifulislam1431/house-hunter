import React from 'react';
import animation from "../../../../public/FQA.json";
import Lottie from "lottie-react";
const FQAPage = () => {
    return (
        <section className='my-14 flex items-center justify-center'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary'>Frequently Asked Questions</h2>
<div>
<div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3  gap-6 my-10'>
    <div>
<Lottie animationData={animation} loop={true} />
    </div>
                <div className='space-y-5'>
                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        How do I create an account on House Hunter?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>To create an account on House Hunter, simply click on the "Sign Up" button located on the top right corner of the homepage. Fill in the required information, including your email address and a password, and follow the instructions to complete the registration process.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        Can I search for rental properties in specific locations?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Yes, you can search for rental properties in specific locations by using the search bar or the advanced search filters available on the website. Enter the desired location or select it from the provided options, and the platform will display relevant rental properties in that area.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        How can I contact the landlord to inquire about a property?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Once you find a property of interest, you can directly contact the landlord or property owner through the House Hunter platform. Each property listing will have a contact option, such as a message button or contact form, allowing you to communicate with the landlord easily.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        Is it possible to schedule a property viewing before making a decision?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Absolutely! House Hunter encourages property viewings to help you make an informed decision. Contact the landlord through the platform and discuss your availability to arrange a suitable time for a property viewing. Remember to adhere to any safety guidelines or protocols during the viewing process.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                        What payment methods are accepted for rental payments?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>The accepted payment methods may vary depending on the landlord's preferences. Common payment methods include bank transfers, online payment platforms, or checks. It's important to discuss the payment method with the landlord and mutually agree upon a suitable option for rental payments.</p>
                        </div>
                    </div>
                </div>
            </div>   
</div>
</div>
        </section>
    );
};

export default FQAPage;