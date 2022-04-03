/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function determines your pay.
 */
function pay () {
  // input
  const TAX_RATE = 0.18;
  const numbersOfHoursWorked = parseFloat(document.getElementById('numbers-of-hours-worked').value)
  const hourlyRate = parseFloat(document.getElementById('hourly-rate').value)

   // process
  const takeHomeSalary = (numbersOfHoursWorked * hourlyRate) * (1.00 - TAX_RATE)
  const governmentTax = (numbersOfHoursWorked * hourlyRate) * TAX_RATE

  // output
  document.getElementById('take-home-salary').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
  document.getElementById('government-tax').innerHTML = 'The government will take: $' + governmentTax.toFixed(2)
}