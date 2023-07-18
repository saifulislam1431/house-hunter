import React from 'react';
import useOwnerHouse from '../../../hooks/useOwnerHouse';

const AllHouses = () => {
    const [ownerHouses] = useOwnerHouse();
    console.log(ownerHouses);
    return (
        <div>
            All houses
        </div>
    );
};

export default AllHouses;