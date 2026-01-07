(() => {
  const mainMenuBtn = document.getElementById('main-menu');
  const previousPageBtn = document.getElementById('previous-page');

  mainMenuBtn.addEventListener('click', () => {
    window.location.href = 'leprechaun.html';
  });

  previousPageBtn.addEventListener('click', () => {
    window.location.href = 'puzzle.html';
  });

  // Falling clovers
  function createClover() {
    const clover = document.createElement('div');
    clover.className = 'clover-fall';
    clover.innerHTML = '🍀';
    clover.style.left = Math.random() * 100 + 'vw';
    clover.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10 seconds
    document.body.appendChild(clover);
    setTimeout(() => {
      clover.remove();
    }, 10000);
  }

  setInterval(createClover, 500); // Every 0.5 seconds
})();
//The falling clovers on the lucky page