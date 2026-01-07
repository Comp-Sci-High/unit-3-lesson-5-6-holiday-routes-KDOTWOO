// make-leprechaun.js
(() => {
  const svg = document.getElementById('leprechaunSvg');
  const hat = document.getElementById('hat');
  const hatBand = document.getElementById('hatBand');
  const face = document.getElementById('face');
  const leftEye = document.getElementById('leftEye');
  const rightEye = document.getElementById('rightEye');
  const body = document.getElementById('body');
  const leftLeg = document.getElementById('leftLeg');
  const rightLeg = document.getElementById('rightLeg');
  const leftShoe = document.getElementById('leftShoe');
  const rightShoe = document.getElementById('rightShoe');

  const prevHat = document.getElementById('prevHat');
  const nextHat = document.getElementById('nextHat');
  const hatLabel = document.getElementById('hatLabel');
  const bodyTone = document.getElementById('bodyTone');
  const eyeColor = document.getElementById('eyeColor');
  const clothes = document.getElementById('clothes');
  const pants = document.getElementById('pants');
  const shoes = document.getElementById('shoes');

  const hats = [
    { label: 'Green Hat', grad: ['#2ea44f', '#0b7a3a'], band: '#0a5f2b' },
    { label: 'Red Hat', grad: ['#ff0000', '#8b0000'], band: '#000000' },
    { label: 'Blue Hat', grad: ['#0000ff', '#00008b'], band: '#ffffff' },
    { label: 'Yellow Hat', grad: ['#ffff00', '#ffd700'], band: '#000000' }
  ];
  let currentHat = 0;

  function updateHat() {
    const h = hats[currentHat];
    hatLabel.textContent = h.label;
    hat.setAttribute('fill', `url(#hatGrad)`);
    // Update gradient
    const grad = document.getElementById('hatGrad');
    grad.children[0].setAttribute('stop-color', h.grad[0]);
    grad.children[1].setAttribute('stop-color', h.grad[1]);
    hatBand.setAttribute('fill', h.band);
  }

  prevHat.addEventListener('click', () => {
    currentHat = (currentHat - 1 + hats.length) % hats.length;
    updateHat();
  });

  nextHat.addEventListener('click', () => {
    currentHat = (currentHat + 1) % hats.length;
    updateHat();
  });

  bodyTone.addEventListener('change', () => {
    face.setAttribute('fill', bodyTone.value);
  });

  eyeColor.addEventListener('change', () => {
    leftEye.setAttribute('fill', eyeColor.value);
    rightEye.setAttribute('fill', eyeColor.value);
  });

  clothes.addEventListener('change', () => {
    body.setAttribute('fill', clothes.value);
  });

  pants.addEventListener('change', () => {
    leftLeg.setAttribute('fill', pants.value);
    rightLeg.setAttribute('fill', pants.value);
  });

  shoes.addEventListener('change', () => {
    leftShoe.setAttribute('fill', shoes.value);
    rightShoe.setAttribute('fill', shoes.value);
  });

  // Initial update
  updateHat();
})();//creates the sprites I use like the leprechaun.