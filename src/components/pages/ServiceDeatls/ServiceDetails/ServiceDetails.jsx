import React from 'react';
import DetailsCard from '../DetailsCard/DetailsCard';
import { useLoaderData } from 'react-router-dom';
import SectionHeading from '../../../shared/SectionHeading';

const ServiceDetails = () => {
    const {data:loadedData} = useLoaderData()
    console.log(loadedData)
    
    return (
        <div className="max-w-7xl mx-auto">
           <div className='mb-10'>
           <SectionHeading text={`${loadedData.serviceName}`} />
            <DetailsCard service={loadedData} />
           </div>
        </div>
    );
};

export default ServiceDetails;