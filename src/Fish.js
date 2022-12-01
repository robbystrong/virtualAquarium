import React from 'react';
import anime from 'animejs';
import Info from "./Info.js";
import butterflyfish from './img/tropical/butterflyfish.png';

let anim = anime({
  targets: 'img',
  keyframes: [
    {translateX: -500},
    {translateX: 500},
  ],
  duration: 3000,
  autoplay: true,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
});

const Fish = props => {
//   return (
//       <img src={butterflyfish} id="fish1" alt="Butterfly Fish" onClick={Info.toggleInfo} id="butterflyfish" width='200' height='200'/>
// );
}

export default Fish;
