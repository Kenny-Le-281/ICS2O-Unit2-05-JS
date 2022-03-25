/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function calculates the area and perimeter of the rectangle.
 */
function pay () {
  // input
  const numbersOfHoursWorked = parseInt(document.getElementById('numbers-of-hours-worked').value)
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)

   // process
  const takeHomeSalary = (numbersOfHoursWorked * hourlyRate) * (1.00 - 0.18)
  const governmentTax = (numbersOfHoursWorked * hourlyRate) * 0.18

  // output
  document.getElementById('take-home-salary').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
  document.getElementById('government-tax').innerHTML = 'The government will take: $' + governmentTax.toFixed(2)
}