import '../styles/components/CardInmueble.css'
import React,{useState, useContext} from "react";
import { AppContext } from "../context/AppContext";
const CardInmueble = () => {
  const {state,clickSlide} = useContext(AppContext)
  console.log('slide',state)

  return (
    <div className="carousel-item-b"  onClick={()=>clickSlide(!state.showSlide)}>
      <div className="card-box-a card-shadow card-inmueble">
        <div className="img-box-a">
          <img
            src="https://res.cloudinary.com/dppmjy7uj/image/upload/v1675454946/assets_CRM/property-1.jpg"
            alt
            className="img-a img-fluid"
          />
        </div>
        <div className="card-overlay">
          <div className="card-overlay-a-content">
            <div className="card-header-a">
              <h2 className="card-title-a">
                <a href="property-single.html">
                  206 Mount
                  <br /> Olive Road Two
                </a>
              </h2>
            </div>
            <div className="card-body-a">
              <div className="price-box d-flex">
                <span className="price-a">rent | $ 12.000</span>
              </div>
              <a href="#" className="link-a">
                Click here to view
                <span className="ion-ios-arrow-forward" />
              </a>
            </div>
            <div className="card-footer-a">
              <ul className="card-info d-flex justify-content-around">
                <li>
                  <h4 className="card-info-title">Area</h4>
                  <span>
                    340m
                    <sup>2</sup>
                  </span>
                </li>
                <li>
                  <h4 className="card-info-title">Beds</h4>
                  <span>2</span>
                </li>
                <li>
                  <h4 className="card-info-title">Baths</h4>
                  <span>4</span>
                </li>
                <li>
                  <h4 className="card-info-title">Garages</h4>
                  <span>1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInmueble;
