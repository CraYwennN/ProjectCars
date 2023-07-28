import { useState } from "react";
import useFetch from "../useFetch";
import {Tilt} from "react-tilt"
import Hero from "./Hero";
import {motion} from "framer-motion"
import { fadeIn } from "../utils/motion";
import Herocar from "./Herocar"
import { Cars } from "../cars/cars";




 


const Homepage = () => {
   
  
    return (
        <>
        
      <div className="homepage">
      <Hero/>
      <motion.div variants = {fadeIn("right", "tween", 0.5, 0.5)}
      initial="hidden"
      viewport={{once:true}}
      whileInView="show"
      className="homepage-buy">
        <h1 className="h1-buy">Our models.</h1>
        

      </motion.div>
      
   <div className="cars-container">  
  
      {Cars.map((car, index) => (
  <div
    
    key={car.Id} className="car-item"
  >
    <Tilt>
  <motion.div
    className="car-hero-text"
    variants={fadeIn("right", "tween", 0.5, 0.5)}
    initial="hidden"
    viewport={{ once: true }}
    whileInView="show"
    options={{
      max: 5,
      scale: 1,
      speed: 350
    }}
  >

    <div className="image-overlay">
      <img src={car.img} className="car-photo" alt={car.Name} />
      <div className="text-overlay-h1">
        <h1 >{car.Model}</h1>
        <p className="text-overlay-p">Additional text or content</p>
      </div>
    </div>
  </motion.div>
</Tilt>
    <motion.div >
      {car.Origin}
    </motion.div>

  </div>
))}
</div> 
        
      </div>
      </>
    );
  };
  
  export default Homepage;


//Id": 1,
//"Name": "Toyota Camry",
//"Year of making": 2021,
//"Engine Type": "Petrol",
//"Top speed": 140,
//"Origin": "Japan",
//"img": "https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.891xw:1.00xh;0.0554xw,0&resize=768:*",
//"Engine Details": {
//  "Displacement": "2.5L",
 // "Cylinders": 4,
 // "Transmission": "Automatic",
  //"Horsepower": 203



  
  
  