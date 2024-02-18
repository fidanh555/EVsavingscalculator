document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function () {
        console.log('Calculate button clicked');
        calculateSavings();
    });
});

function calculateSavings() {
    console.log('Calculating savings...');

    const numVehicles = parseFloat(getInputValue('numVehicles'));
    console.log('numVehicles:', numVehicles);

    const mileage = parseFloat(getInputValue('mileage'));
    const fuelCost = parseFloat(getInputValue('fuelCost'));
    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    const evConsumption = parseFloat(getInputValue('evConsumption'));
    const electricityCost = parseFloat(getInputValue('electricityCost'));

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    if (!areInputsValid(numVehicles, mileage, fuelCost, iceConsumption, evConsumption, electricityCost)) {
        displayError('Please enter valid numerical values for all fields.');
        console.log('Validation failed');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    const evElectricityConsumption = calculateElectricityConsumption(evConsumption, mileage);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;

    console.log('Total Savings:', totalSavings);
    console.log('Per Vehicle Savings:', perVehicleSavings);

    displayResult(totalSavings, perVehicleSavings);
}

// ... (rest of the functions remain unchanged)
