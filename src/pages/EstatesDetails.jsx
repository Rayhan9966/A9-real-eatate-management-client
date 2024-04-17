import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EstatesDetails = () => {
  
   
    return (
		<div>
		{/* <div className="card-body w-96 bg-base-100 gap-4">
   <figure><img className="" src={image} alt="Shoes" /></figure>
   <div className="card-body gap-5">
	 <h2 className="card-title">
	 {estate_title}
	   <div className="badge badge-secondary"></div>
	 </h2>
	 <p>{segment_name}</p>
	 <p>{price}</p>
	 <p>{area}</p>
	 <p>Indulge in luxury living with this magnificent lakeside mansion boasting panoramic views and unparalleled elegance. With sprawling grounds, a private dock, and lavish amenities, it's a dream home for the discerning buyer.</p>
	 <div className="card-actions justify-end">
	   <div className="badge badge-outline">{status}</div>
	   <div className="badge badge-outline"><Link to="/estatedetails">Property Details</Link></div>
	 </div>
   </div>
 </div> */}
 <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
<div className="flex justify-between pb-4 border-bottom">
   <div className="flex items-center">
	   <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100">Residential</a>
   </div>
   <button className='btn btn-secondary'><a rel="noopener noreferrer" href="#">Sale</a></button>
</div>
<div className="space-y-4">
   <div className="space-y-2">
	   <img src="https://i.postimg.cc/8cCxbKGC/images.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	   <div className="flex justify-between items-center text-xs">
		   <span>$5,000,000</span>
		   <span>6000 sq ft</span>
	   </div>
   </div>
   <div className="space-y-2">
	   <a rel="noopener noreferrer" href="#" className="block">
		   <h3 className="text-xl font-semibold text-violet-400">Luxury Beachfront Villa</h3>
	   </a>
	   <p className="leading-snug text-gray-400">This exquisite beachfront villa offers unparalleled luxury and breathtaking ocean views. With expansive living spaces, private beach access, and resort-style amenities, it epitomizes coastal living at its finest.</p>
   </div>
{/* <Link to="/estatedetails"><button className="btn btn-primary">View Details</button></Link> */}
</div>
</div>
   </div>
		// <div>
		// 	<Link to={`/estatedetails/${id}`} className="mb-4 transition hover:scale-105 focus">
		// 		<div className="card w-96 bg-base-100 shadow-xl border-2 hover:border-gray-400">

		// 			<div className=" p-6">
		// 				<div className=" flex justify-center items-center bg-gray-200 rounded-2xl">
		// 					<img src={image} alt="Shoes" className="rounded-xl py-5" />
		// 				</div>
		// 			</div>

		// 			<div className="card-body ">

		// 				<h2 className="card-title">{estate_title}</h2>
		// 				<p className='font-bold'>by : {segment_name}</p>
		// 				<hr className='border-dashed my-2' />
		// 				<div className='flex justify-between'>
		// 					<p>{price}</p>
		// 					<p className='flex gap-4'>
		// 						{area}
		// 						{/* <img src={ratingImg} alt="" /> */}
		// 					</p>
		// 				</div>

		// 			</div>
		// 		</div>

		// 	</Link>
		// </div>
	);
};

export default EstatesDetails;