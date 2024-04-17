import React, { useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import EsCard from './EsCard';


const Estates = () => {
 
   
  const property = useLoaderData()||[]
  console.log(property);
  return (
    <div className='card-body bg-base-100 gap-4 grid grid-cols-3'>

{
  property.map(aproperty =><EsCard
    key={aproperty.id}
    allproperty={aproperty}>
   
  </EsCard>
 

  )
}
     
     

    </div>
  );
};

export default Estates;