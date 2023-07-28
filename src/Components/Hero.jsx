import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Typewriter from './CustomTypewriter'; // Assuming you have the CustomTypewriter component in a separate file
import Navbar from './Navbar';


const Hero = () => {
  const images = [""];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const heroImage = images[index];
  const animationVariants = fadeIn("left", 'tween', 0, 1.5);
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondTypewriter(true);
    }, 4000); // Delay the appearance of the second typewriter by 5 seconds
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    
      <div className="hero-container">
      <Navbar />
        <motion.div
          variants={fadeIn("right", 'tween', 0, 1)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          className="hero-section"
        >
          <div className='hero-text'>
            <h2 className='hero-h2'>Introducing Porsche.</h2>
            
            <Typewriter
              className = "hero-typewriter"
              text="At Car.Project, we believe that driving is an art form—a thrilling experience that deserves to be enjoyed in its purest form."
              delay={25}
              
            /><br/>

            {showSecondTypewriter && (
              <Typewriter
                text="We are proud to present our exclusive collection of premium cars, curated for enthusiasts who seek unparalleled luxury, cutting-edge technology, and exhilarating performance."
                delay={25}
                
              />
            )}<br/>
          </div>
        </motion.div>
              
       
      </div>
      
    </>
  );
};

export default Hero;







/*<motion.div
key={heroImage} // Add a unique key to trigger animation when image changes
variants={animationVariants}
initial="hidden"
animate="show" // Use animate prop to start the animation
exit="hidden" // Add exit variant if you want an animation when the component is unmounted
className="hero-image"
>
<motion.img src={heroImage} className='hero-img' />
</motion.div>*/



/*<div className='information'>
                <motion.div variants={fadeIn("right", 'tween', 0, 1)}
                 className='information-item'
                 initial="hidden"
                 viewport={{ once: true }}
                 whileInView="show">
                  <img src = {"../guarantee.png"} className='info-image'/>
                  <p>6-month warranty</p>
                  <button className="hover-button">Learn More</button>
                  </motion.div>
                <motion.div variants={fadeIn("right", 'tween', 0, 1)} 
                className='information-item2'
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show">
                  <img src = {"../support.png"} className='info-image'/>
                  <p>24/7 customer service</p>
                  <button className="hover-button">Learn More</button>
                  </motion.div>
                <motion.div variants={fadeIn("right", 'tween', 0, 1)} 
                className='information-item3'
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show">
                  <img src = {"../money-back.png"} className='info-image'/>
                  <p>Money back guarantee</p>
                  <button className="hover-button">Learn more</button>
                  </motion.div>
              </div>*/