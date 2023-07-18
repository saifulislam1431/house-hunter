import React from 'react';

const HowItWork = () => {
    return (
        <section className='my-14 flex items-center justify-center'>
<div className='w-full text-center'>
<h2 className='text-center mb-10 text-2xl font-bold text-primary'>Simplified Rental Process: Find Your Ideal Home in a Few Simple Steps</h2>

<ul className="steps steps-vertical lg:steps-horizontal">
  <li data-content="+" className="step step-accent font-semibold">Select</li>
  <li data-content="$" className="step step-success font-semibold">Purchase</li>
  <li data-content="✓" className="step step-success font-semibold">Confirm Booking</li>
  <li data-content="★" className="step step-success font-semibold">Shift Into Your New House</li>
</ul>
</div>
        </section>
    );
};

export default HowItWork;