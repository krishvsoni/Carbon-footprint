const carbonForm = document.querySelector('#carbon-form');
const resultsDiv = document.querySelector('#results');
carbonForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numUsers = parseFloat(document.querySelector('#num-users').value);
  const hoursPerDay = parseFloat(document.querySelector('#hours-per-day').value);
  const daysPerWeek = parseFloat(document.querySelector('#days-per-week').value);
  const numServers = parseFloat(document.querySelector('#num-servers').value);
  const wattsPerServer = parseFloat(document.querySelector('#watts-per-server').value);
  const carbonIntensity = parseFloat(document.querySelector('#carbon-intensity').value);

  const totalEnergy = numUsers * hoursPerDay * daysPerWeek * numServers * wattsPerServer / 1000;
  const totalCarbon = totalEnergy * carbonIntensity;
  const roundedCarbon = Math.round(totalCarbon * 100) / 100;

  resultsDiv.innerHTML = `<p>Total carbon produced: ${roundedCarbon} kgCO2e</p>`;
});