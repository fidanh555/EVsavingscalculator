document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function () {
        calculateSavings();
    });
});

function calculateSavings() {
    const numVehicles = parseFloat(getInputValue('numVehicles'));
    const mileage = parseFloat(getInputValue('mileage'));
    const fuelCost = parseFloat(getInputValue('fuelCost'));
    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    const evConsumption = parseFloat(getInputValue('evConsumption'));
    const electricityCost = parseFloat(getInputValue('electricityCost'));

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    if (!areInputsValid(numVehicles, mileage, fuelCost, iceConsumption, evConsumption, electricityCost)) {
        displayError('Please enter valid numerical values for all fields.');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    const evElectricityConsumption = calculateElectricityConsumption(evConsumption, mileage);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;

    displayResult(totalSavings, perVehicleSavings);
}

// ... (rest of the functions remain unchanged)
