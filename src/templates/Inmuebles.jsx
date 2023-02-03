import React from "react";
import '../styles/templates/Inmuebles.css'
import CardInmueble from "../components/CardInmueble";

const Inmuebles = ({props}) => {
  console.log(props)
  return (
    <section className="section-property section-t8">
      <div className=" container-cards">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Properties</h2>
              </div>
              <div className="title-link">
                <a href="property-grid.html">
                  All Property
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-card__property">
          <CardInmueble/>
        </div>
      </div>
    </section>
  );
};

export default Inmuebles;
