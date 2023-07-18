import React from 'react';
import Banner from '../Banner/Banner';
import HotDeals from '../HotDeals/HotDeals';
import HowItWork from '../HowItWork/HowItWork';
import FQAPage from '../FQAPage/FQAPage';

const Home = () => {
    return (
        <section className='my-14'>
<Banner/>
<HotDeals />
<HowItWork />
<FQAPage />
        </section>
    );
};

export default Home;