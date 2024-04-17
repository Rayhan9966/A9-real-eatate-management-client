import { Link } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute/ProtectedRoute";


const EsCard = ({allproperty}) => {
    // const {estate_title}=property;
    const {status,estate_title,segment_name,price,area,image,description}=allproperty;
    console.log(allproperty);
   
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
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100">{segment_name}</a>
		</div>
		<a rel="noopener noreferrer" href="#">{status}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			<div className="flex justify-between items-center text-xs">
				<span>{price}</span>
				<span>{area}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400">{estate_title}</h3>
			</a>
			<p className="leading-snug text-gray-400">{description}</p>
		</div>
    <Link to="/estatedetails"><button className="btn btn-primary">View Details</button></Link>
	</div>
</div>
        </div>
    );
};

export default EsCard;