import React from 'react';


function Silde() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://rubicmarketing.com/wp-content/uploads/2021/07/banner-quang-cao-facebook-3.jpg" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://mona.media/wp-content/uploads/2021/06/banner-website.png" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://rubicmarketing.com/wp-content/uploads/2021/07/banner-quang-cao-facebook-3.jpg" alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div> 
  );
}

export default Silde;
