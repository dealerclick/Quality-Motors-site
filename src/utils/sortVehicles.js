/**
 * Sorts the vehicles based on the selected sort criteria.
 *
 * @param {Array} vehicles - The array of vehicles to be sorted.
 * @param {Object} sort - The sort criteria containing the value and direction.
 *                          e.g., { value: 'year', direction: 'asc' }
 * @returns {Array} - The sorted array of vehicles.
 */
const sortVehicles = (vehicles, sort) => {
  if (!sort.value) return vehicles

  return [...vehicles].sort((a, b) => {
    // Retrieve the sorting attributes
    const aValue = a.node[sort.value]
    const bValue = b.node[sort.value]

    // Try parsing them as floats if possible
    const aValueFloat = parseFloat(aValue)
    const bValueFloat = parseFloat(bValue)

    // Determine which value to use for sorting
    const finalAValue = isNaN(aValueFloat) ? aValue : aValueFloat
    const finalBValue = isNaN(bValueFloat) ? bValue : bValueFloat

    // Ascending sort
    if (sort.direction === "asc") {
      if (finalAValue < finalBValue) return -1
      if (finalAValue > finalBValue) return 1
      return 0 // Fallback when values are equal
    }

    // Descending sort
    else {
      if (finalAValue > finalBValue) return -1
      if (finalAValue < finalBValue) return 1
      return 0 // Fallback when values are equal
    }
  })
}

export default sortVehicles
