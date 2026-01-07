// leprechaun page JS: clover facts, leprechaun to puzzle
(() => {
  const cloverImg = document.querySelector('.clover-img');
  const factDisplay = document.getElementById('fact-display');
  const leprechaun = document.getElementById('leprechaun');

  const facts = [
    "Saint Patrick's Day commemorates Saint Patrick, the patron saint of Ireland.",
    "Saint Patrick was born in Britain around 385 AD and was kidnapped by Irish pirates at age 16.",
    "He escaped and later returned to Ireland as a missionary to convert pagans to Christianity.",
    "He is credited with bringing Christianity to Ireland and using the shamrock to explain the Holy Trinity.",
    "The holiday was first celebrated in the United States in the 18th century by Irish immigrants."
  ];

  let factIndex = 0;

  cloverImg.addEventListener('mouseenter', () => {
    factDisplay.textContent = facts[factIndex];
    factDisplay.style.display = 'block';
    factIndex = (factIndex + 1) % facts.length;
  });

  cloverImg.addEventListener('mouseleave', () => {
    factDisplay.style.display = 'none';
  });

  leprechaun.addEventListener('click', () => {
    window.location.href = 'puzzle.html';
  });

  // Falling coins
  function createCoin() {
    const coin = document.createElement('div');
    coin.className = 'coin-fall';
    coin.innerHTML = '🪙'; // Gold coin emoji
    coin.style.left = Math.random() * 100 + 'vw';
    coin.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10 seconds
    document.body.appendChild(coin);
    setTimeout(() => {
      coin.remove();
    }, 10000);
  }

  setInterval(createCoin, 1000); // Every 1 second
})();
// this is the 4 leaf clover that gives me facts and the leprechaun that takes me to the puzzle page