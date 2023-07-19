import React from 'react';
import Banner from '../Banner/Banner';
import HotDeals from '../HotDeals/HotDeals';
import HowItWork from '../HowItWork/HowItWork';
import FQAPage from '../FQAPage/FQAPage';
import Testimonial from '../../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <section className='my-14'>
            <Helmet>
                <title>House Hunter  | Home</title>
            </Helmet>
<Banner/>
<HotDeals />
<HowItWork />
<FQAPage />
<Testimonial />
        </section>
    );
};

export default Home;