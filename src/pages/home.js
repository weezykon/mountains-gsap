import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Banner from '../components/Banner'
import Cases from '../components/Cases'
import IntroOverlay from '../components/introOverlay'

// Animations
const tl = gsap.timeline();

const animationFunction = (completeAnimation) => {
    // animation header
    tl.from('.line span', 1.8, {
        y: 100,
        ease: 'power4.out',
        delay: 1,
        skewY: 7,
        stagger: {
          amount: .5
        }
      }).to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4
      }).to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -.8,
        stagger: {
          amount: 0.4
        }
      }).to('.intro-overlay', 0, { css: { display: 'none' }})
      .from('.case-image img', 1.6, {
        scale: 1.5,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4
        },
        onComplete: completeAnimation
      });
}

const Home = () => {
    const [animationComplete, setAnimationComplete] =  useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    }
    useEffect(() => {
      // let vh = window.innerHeight * .01;
      // document.documentElement.style.setProperty('--vh', `${vh}px`);
  
      animationFunction(completeAnimation);
    }, [])
    return (
        <>   
            <IntroOverlay />
            <Banner />
            <Cases />
        </>
    )
}

export default Home
