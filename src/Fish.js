import React from 'react';
import anime from 'animejs';
import Info from "./Info.js";
import butterflyfish from './img/tropical/butterflyfish.png';

let anim = anime({
  targets: 'img',
  translateX: 20,
});

const Fish = props => {
  return (
      <img src={butterflyfish} alt="Butterfly Fish" onClick={Info.toggleInfo} id="butterflyfish" />
);
}

export default Fish;
