import React from 'react';

const About = () => {
    return (
        <div className='my-container mt-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='70326c9b-4a0f-429b-9c76-792941e326d5'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Welcome</span>
            </span>{' '}
            to House Hunter - Your Ultimate Rental Destination
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          At House Hunter, we believe that finding your ideal rental home should be an enjoyable and hassle-free experience. Our platform serves as a connecting bridge between house owners looking to rent out their properties and house renters in search of their dream homes. We are dedicated to simplifying the house rental process, making it easier for both landlords and tenants to connect and transact seamlessly.
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto'>
        <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Why Choose House Hunter?
              </p>
              <p className='text-gray-700'>
              Extensive Property Listings: Our platform hosts an extensive database of rental properties across various locations. Whether you're looking for a cozy apartment in the heart of the city or a spacious house in a tranquil suburb, we have a diverse range of properties to suit your preferences.
                <br />
                <br />
                Easy-to-Use Interface: We've designed our website with a user-friendly interface, allowing you to navigate effortlessly through property listings and filter your search based on specific criteria. With just a few clicks, you can find the perfect rental that matches your needs.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Our Mission:
              </p>
              <p className='text-gray-700'>
              Our dedicated support team is here to assist you every step of the way. If you have any questions, concerns, or need assistance with using the platform, we are just a message away.
                <br />
                <br />
                Our mission is to revolutionize the house rental process, providing a one-stop solution that empowers both landlords and tenants. We strive to foster transparency, trust, and convenience in the rental market, making the process more accessible and rewarding for all.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Our Vision:
              </p>
              <p className='text-gray-700'>
              At House Hunter, our vision is to be the leading platform in the rental industry, setting the standard for seamless, efficient, and transparent house hunting. We aim to empower renters by providing them with a wide array of rental options and the necessary tools to make informed decisions. Simultaneously, we aim to support landlords in reaching their target audience, ensuring their properties find the right tenants quickly.
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Why Trust House Hunter?
              </p>
              <p className='text-gray-700'>
              We prioritize the authenticity and accuracy of property listings. Every property on our platform goes through a verification process to ensure that the information provided is reliable and up-to-date.
                <br />
                <br />
                We prioritize the authenticity and accuracy of property listings. Every property on our platform goes through a verification process to ensure that the information provided is reliable and up-to-date.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Our Commitment:
              </p>
              <p className='text-gray-700'>
              We are committed to revolutionizing the house rental process and reshaping the way landlords and tenants connect. Our dedication to excellence, innovation, and customer satisfaction drives us forward, striving to deliver the best rental experience possible.
                <br />
                <br />
                House Hunter is not just a platform; it's a community. We encourage open communication and feedback from our users, helping us continuously improve and enhance the platform based on your valuable insights.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              Join House Hunter Today:
              </p>
              <p className='text-gray-700'>
              Join our ever-growing community of happy tenants and satisfied landlords. Explore our vast selection of rental properties, take advantage of exclusive deals, and embark on a journey to find the perfect place to call home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;