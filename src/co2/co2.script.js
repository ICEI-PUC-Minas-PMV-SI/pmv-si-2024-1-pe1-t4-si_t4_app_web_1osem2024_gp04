function calculateCO2() {
    var energyInput = document.getElementById("energyConsumption").value;
    
    if (energyInput === "" || isNaN(energyInput)) {
        return;
    }
    
    var energyConsumption = parseFloat(energyInput);
    
    var coalEmission = energyConsumption * 1;
    var oilEmission = energyConsumption * 0.8;
    var gasEmission = energyConsumption * 0.5;
    var hydroEmission = energyConsumption * 0.1;
    
    document.getElementById("CO2results").innerHTML = 
        "<p>Se proveniente de carvão: " + coalEmission.toFixed(2) + " kg</p>" +
        "<p>Se proveniente de petróleo: " + oilEmission.toFixed(2) + " kg</p>" +
        "<p>Se proveniente de gás natural: " + gasEmission.toFixed(2) + " kg</p>" +
        "<p>Se proveniente de energia hidrelétrica: " + hydroEmission.toFixed(2) + " kg</p>";
}