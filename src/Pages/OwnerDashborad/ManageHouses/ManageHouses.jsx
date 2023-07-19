import React from 'react';
import useOwnerHouse from '../../../hooks/useOwnerHouse';

const ManageHouses = () => {
    const[ownerHouses,refetch]=useOwnerHouse();
    return (
        <section className='flex items-center justify-center my-12'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Manage Your Houses</h2>

<div className='my-8'>

</div>
</div>
        </section>
    );
};

export default ManageHouses;