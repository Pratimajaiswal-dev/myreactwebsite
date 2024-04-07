import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';

const About = () =>{
  const {updateAboutPage} = useGlobalContext();
  useEffect(()=>{
    updateAboutPage();
  },[]);

  return <HeroSection {...data}/>
};

export default About;