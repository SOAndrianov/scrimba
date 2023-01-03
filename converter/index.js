/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert')
const metricsEl = document.getElementById('metrics')
let valueEl = document.getElementById('input')

convertBtn.addEventListener("click", function(){
    let convertVal = valueEl.value
    let feetVal = convertVal * 3.281
    let meterVal = convertVal / 3.281 
    let gallonVal = convertVal * 0.264
    let literVal = convertVal / 0.264
    let poundVal = convertVal * 2.204
    let kiloVal = convertVal / 2.204
    console.log(convertVal)
    metricsEl.innerHTML += `
        <li>
            <p>Length (Meter/Feet)</p>
            <span>${convertVal} meters = ${feetVal.toFixed(3)} feet | 20 feet = ${meterVal.toFixed(3)} meters</span>
        </li>
        <li>
            <p>Volume (Liters/Gallons)</p>
            <span>${convertVal} liters = ${gallonVal.toFixed(3)} | 20 gallons = ${literVal.toFixed(3)} liters</span>
        </li>
        <li>
            <p>Mass (Kilograms/Pounds)</p>
            <span>${convertVal} kilos = ${poundVal.toFixed(3)} | 20 pounds = ${kiloVal.toFixed(3)} kilos</span>
        </li>
    `
    
})

