import React, { createContext, useState } from 'react';

const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({
        favourites: [],
        bookings: [], // Initialize as an empty array
        token: null,
    });

    return (
        <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </UserDetailContext.Provider>
    );
};
export default UserDetailContext;