// Function to verify valid service quality
function verifyServiceQuality(serviceQuality) {
    const validQualities = ['great', 'ok', 'poor'];
    return validQualities.includes(serviceQuality.toLowerCase());
}

// Function to verify the service amount is between $5.00 and $500.00
function verifyServiceAmount(serviceAmount) {
    return serviceAmount >= 5 && serviceAmount <= 500;
}

// Function to calculate the tip amount
function calculateTip(serviceAmount, serviceQuality) {
    let tipPercentage;
    switch (serviceQuality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0;
    }
    return serviceAmount * tipPercentage;
}

// Main script
const serviceAmountInput = prompt("Enter the dollar amount of the service (between $5.00 and $500.00):");
const serviceAmount = parseFloat(serviceAmountInput);

if (!verifyServiceAmount(serviceAmount)) {
    alert("Invalid service amount. Please enter an amount between $5.00 and $500.00.");
} else {
    const serviceQuality = prompt("Enter the service quality (great, ok, or poor):");
    if (!verifyServiceQuality(serviceQuality)) {
        alert("Invalid service quality. Please enter 'great', 'ok', or 'poor'.");
    } else {
        const tipAmount = calculateTip(serviceAmount, serviceQuality);
        alert(`For a service amount of $${serviceAmount.toFixed(2)}, with a(n) ${serviceQuality} service quality, the recommended tip is $${tipAmount.toFixed(2)}.`);
    }
}
