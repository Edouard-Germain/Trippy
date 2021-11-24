import React from 'react';
import { useContext } from 'react';
import { CityContext } from '../context/City';

const City = () => {
    const{parameters,setParameters} = useContext(CityContext)

    return (
        <div>
           <p>{parameters.city}</p>

        </div>
    );
};

export default City;