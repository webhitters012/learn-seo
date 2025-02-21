import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompanyOverview = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12 text-center">
          <img
            src="./Images/New_home/Best Digital Marketing Training in Zirakpur.jpg"
            className="img-fluid"
            alt="Company Overview"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
