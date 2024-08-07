/**
 * @file Dude, this rad function helps you figure out if your ride has low miles or not.
 */

/**
 * @function
 * @description Calculate if the vehicle's mileage divided by its age is less than 12,000 miles per year.
 * @param {number} mileage - Total miles on the vehicle's odometer, bro.
 * @param {number} year - The year the vehicle was made, dude.
 * @returns {boolean} Returns true if the mileage divided by the vehicle's age is less than 12,000 miles per year, false otherwise.
 */
const calculateLowMiles = (mileage, year) => {
  // Calculate the car's age, man
  const currentYear = new Date().getFullYear()
  const vehicleAge = currentYear - year

  // Watch out for brand new cars, bro, they have no age!
  if (vehicleAge === 0) return false

  // Divide the mileage by the car's age, dude
  const averageMilesPerYear = mileage / vehicleAge

  // Return true if it's less than 12,000 miles per year, false otherwise
  return averageMilesPerYear < 12000
}

export default calculateLowMiles
