import './App.css';
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function App() {
  const container = useRef();

  useGSAP(() => {
    gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
    gsap.set('.scrollDist', {width:'100%', height:'200%'})
    gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)

    // $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
    // $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
    // $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
  });

  return (
    <div>
      <div className="scrollDist"></div>
      <div className="main">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
            </g>
          </mask>
          
          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
          <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
          <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
          <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
          <text fill="#fff" x="350" y="200">EXPLORE</text>
          <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="350" y="200" fill="#162a43">FURTHER</text>
          </g>
          
          {/* <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style="cursor:pointer"/> */}
        </svg>
      </div>
    </div>
  );
}

export default App;
