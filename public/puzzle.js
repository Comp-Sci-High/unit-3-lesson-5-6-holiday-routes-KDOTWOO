(() => {
  const submitBtn = document.getElementById('submit');
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const curtain = document.getElementById('curtain');
  const potContainer = document.getElementById('pot-container');
  const pot = document.querySelector('.pot');
  const body = document.body;
  const sun = document.querySelector('.sun');
  const clouds = document.querySelectorAll('.cloud');
  const rainbowSvg = document.querySelector('.rainbow-svg');
  const leprechaunSvg = document.querySelector('.leprechaun-svg');

  submitBtn.addEventListener('click', () => {
    if (input1.value.toLowerCase() === 'patrick' && input2.value.toLowerCase() === 'day') {
      curtain.classList.add('lifted');
      // Hide sun and clouds, set background to black
      sun.style.display = 'none';
      clouds.forEach(cloud => cloud.style.display = 'none');
      body.style.background = '#000';
      setTimeout(() => {
        potContainer.style.display = 'block';
      }, 2000);
    } else {
      alert('Incorrect! Try again.');
    }
  });

  pot.addEventListener('click', () => {
    // Set background to blue, show rainbow and leprechaun
    body.style.background = '#87CEEB';
    rainbowSvg.style.display = 'block';
    leprechaunSvg.style.display = 'block';
    potContainer.style.display = 'none';
    setTimeout(() => {
      window.location.href = 'lucky.html';
    }, 3000);
  });
})();
// Creates the puzzle where you have to type in patrick and day to see the leprechaun and rainbow