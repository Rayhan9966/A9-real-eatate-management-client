import React, { useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import EsCard from './EsCard';


const Estates = () => {
  // useEffect(() => {
   
  const property = useLoaderData();
  console.log(property);
  return (
    <div className='grid grid-cols-3'>

{
  property.map(aproperty =>
    
  <EsCard>
    key={aproperty.id}
    property={aproperty}
  </EsCard>
 

  )
}
     
     

    </div>
  );
};

export default Estates;