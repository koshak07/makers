import React, { useContext, useEffect } from 'react';
import { mainContext } from '../contexts/MainContext';

const MainPage = () => {
    const { getCountries, countries} = useContext(mainContext)
    useEffect(()=>{
        getCountries()

    }, [])
    console.log(countries);
    return (
        <div>
            Main Page
        </div>
    );
};

export default MainPage;