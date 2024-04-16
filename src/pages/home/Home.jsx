import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Home = () => {
   const user =useContext(AuthContext)
   console.log(user);
    return (
       <div>
  <div className=" carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="ml-48 p-35 h-2/3 w-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/5tYPFS28/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge-125.jpg" className="ml-48 p-35 h-2/3 w-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/5tYPFS28/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge-125.jpg" className=" ml-48 p-35 h-2/3 w-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/HkxmRR6H/3d-house-model-with-modern-architecture-23-2151004068.jpg" className="ml-48 p-35 h-2/3 w-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
       </div>
    );
};

export default Home;
