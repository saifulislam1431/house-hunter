import React from 'react';
import useBookings from '../../../hooks/useBookings';

const CurrentBookings = () => {
    const [bookings] = useBookings();
    console.log(bookings);
    return (
        <div>
            Current Bookings
        </div>
    );
};

export default CurrentBookings;