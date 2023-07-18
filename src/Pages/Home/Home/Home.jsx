import React from 'react';
import Banner from '../Banner/Banner';
import HotDeals from '../HotDeals/HotDeals';
import HowItWork from '../HowItWork/HowItWork';
import FQAPage from '../FQAPage/FQAPage';
import Testimonial from '../../Testimonial/Testimonial';

const Home = () => {
    return (
        <section className='my-14'>
<Banner/>
<HotDeals />
<HowItWork />
<FQAPage />
<Testimonial />
        </section>
    );
};

export default Home;