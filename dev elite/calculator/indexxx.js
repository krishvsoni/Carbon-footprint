document.getElementById("carbon-form").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateCarbon();
  });
  
  function calculateCarbon() {
    const numUsers = parseFloat(document.getElementById("num-users").value);
    const hoursPerDay = parseFloat(document.getElementById("hours-per-day").value);
    const daysPerWeek = parseFloat(document.getElementById("days-per-week").value);
    const numServers = parseFloat(document.getElementById("num-servers").value);
    const wattsPerServer = parseFloat(document.getElementById("watts-per-server").value);
    const carbonIntensity = parseFloat(document.getElementById("carbon-intensity").value);
  
    const totalWatts = numServers * wattsPerServer;
    const totalHoursPerWeek = hoursPerDay * daysPerWeek;
    const totalKwhPerWeek = (totalWatts * totalHoursPerWeek) / 1000;
    const totalKgCo2ePerWeek = totalKwhPerWeek * carbonIntensity;
    const totalKgCo2ePerYear = totalKgCo2ePerWeek * 52;
  
    const resultContainer = document.getElementById("results");
    resultContainer.innerHTML = `
      <h2>Results</h2>
      <p>Number of users: ${numUsers}</p>
      <p>Hours per day: ${hoursPerDay}</p>
      <p>Days per week: ${daysPerWeek}</p>
      <p>Number of servers: ${numServers}</p>
      <p>Watts per server: ${wattsPerServer}</p>
      <p>Carbon intensity: ${carbonIntensity} kgCO2e/kWh</p>
      <p>Total carbon produced per week: ${totalKgCo2ePerWeek.toFixed(2)} kgCO2e</p>
      <p>Total carbon produced per year: ${totalKgCo2ePerYear.toFixed(2)} kgCO2e</p>
    `;
  }
  