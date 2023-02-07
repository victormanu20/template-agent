import '../styles/templates/Inmuebles.css'
import CardInmueble from "../components/CardInmueble";
import React,{ useContext, useState} from "react";
import { AppContext } from "../context/AppContext.js"
import axios from 'axios';

const Inmuebles = () => {
  const [inmuebles,setInmuebles] = useState({});

  const BASE_URL = "http://192.168.5.15:8000/"

  // const getInmuebles = async ()  =>{
  //   console.log('datos')
  //   const res = await fetch(`${BASE_URL}api/pagina_web/filter/emporio-bienes-y-capitales-sas`,{method:'POST'});
  //   console.log(res)
  // }
  // getInmuebles()

  function getListInmuebles(ctx){
    axios.get(`http://192.168.5.15:8000/api/pagina_web/filter/emporio-bienes-y-capitales-sas`)
    .then(res => {
      const persons = res;
      console.log(persons)
    })
  }
  getListInmuebles()


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
