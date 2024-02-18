document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function () {
        console.log('Calculate button clicked');
        calculateSavings();
    });
});

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function calculateSavings() {
    console.log('Calculating savings...');

    const numVehicles = parseFloat(getInputValue('numVehicles'));
    console.log('numVehicles:', numVehicles);

    const mileage = parseFloat(getInputValue('mileage'));
    console.log('mileage:', mileage);

    const fuelCost = parseFloat(getInputValue('fuelCost'));
    console.log('fuelCost:', fuelCost);

    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    console.log('iceConsumption:', iceConsumption);

    const evConsumption = parseFloat(getInputValue('evConsumption'));
    console.log('evConsumption:', evConsumption);

    const electricityCost = parseFloat(getInputValue('electricityCost'));
    console.log('electricityCost:', electricityCost);

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    if (!areInputsValid(numVehicles, mileage, fuelCost, iceConsumption, evConsumption, electricityCost)) {
        displayError('Please enter valid numerical values for all fields.');
        console.log('Validation failed');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    console.log('iceFuelConsumption:', iceFuelConsumption);

    const evElectricityConsumption = calculateElectricityConsumption(evConsumption, mileage);
    console.log('evElectricityConsumption:', evElectricityConsumption);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    console.log('iceFuelCost:', iceFuelCost);

    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);
    console.log('evElectricityCost:', evElectricityCost);

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;

    console.log('Total Savings:', totalSavings);
    console.log('Per Vehicle Savings:', perVehicleSavings);

    displayResult(totalSavings, perVehicleSavings);
}

function areInputsValid(...values) {
    return values.every(value => !isNaN(value));
}

function displayError(errorMessage) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = errorMessage;
}

function calculateFuelConsumption(iceConsumption, mileage) {
    return (iceConsumption * mileage) / 100;
}

function calculateElectricityConsumption(evConsumption, mileage) {
    return (evConsumption * mileage) / 100;
}

function calculateFuelCost(fuelConsumption, fuelCost, numVehicles) {
    return fuelConsumption * fuelCost * numVehicles;
}

function calculateElectricityCost(electricityConsumption, electricityCost, numVehicles) {
    return electricityConsumption * electricityCost * numVehicles;
}

function displayResult(totalSavings, perVehicleSavings) {
    document.getElementById('totalSavingsValue').textContent = roundToDecimal(totalSavings, 2);
    document.getElementById('perVehicleSavingsValue').textContent = roundToDecimal(perVehicleSavings, 2);
}

function roundToDecimal(value, decimalPlaces) {
    return parseFloat(value.toFixed(decimalPlaces));
}
