document.addEventListener("DOMContentLoaded", function () {
    // Attach the calculateLengthConversion function to the button click event
    document.getElementById("calculateButton").addEventListener("click", calculateLengthConversion);
});

function calculateLengthConversion() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var conversionType = document.getElementById("conversionType").value;
    var result;

    if (conversionType === "metersToFeet") {
        result = inputValue * 3.28084; // Conversion factor: 1 meter = 3.28084 feet
    } else if (conversionType === "feetToMeters") {
        result = inputValue / 3.28084; // Conversion factor: 1 foot = 0.3048 meters
    }
    
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}
