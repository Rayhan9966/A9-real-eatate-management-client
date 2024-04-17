import { Link } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute/ProtectedRoute";


const EsCard = ({property}) => {
    // const {estate_title}=property;
    // const {status}=property;
    console.log(property);
   
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://i.postimg.cc/8cCxbKGC/images.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          Luxury Beachfront Villa
            <div className="badge badge-secondary"></div>
          </h2>
          <p>Indulge in luxury living with this magnificent lakeside mansion boasting panoramic views and unparalleled elegance. With sprawling grounds, a private dock, and lavish amenities, it's a dream home for the discerning buyer.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{property?.status}</div>
            <div className="badge badge-outline"><ProtectedRoute><Link to="/estatedetails">Property Details</Link></ProtectedRoute></div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default EsCard;