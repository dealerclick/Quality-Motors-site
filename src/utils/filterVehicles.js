/**
 * Filters the vehicles based on the filter and search criteria.
 *
 * @param {Array} vehicles - The array of vehicle objects.
 * @param {Object} filter - The filter criteria object.
 * @param {string} search - The search string.
 * @returns {Array} - The filtered array of vehicles.
 */
const filterVehicles = (vehicles, filter, search) => {
  return vehicles.filter(({ node }) => {
    // Filter by year
    if (
      filter.year &&
      filter.year.length > 0 &&
      !filter.year.includes(node.year)
    ) {
      return false
    }

    // Filter by make
    if (
      filter.make &&
      filter.make.length > 0 &&
      !filter.make.includes(node.make)
    ) {
      return false
    }

    // Filter by type
    if (
      filter.type &&
      filter.type.length > 0 &&
      !filter.type.includes(node.type)
    ) {
      return false
    }

    // Filter by model
    if (
      filter.model &&
      filter.model.length > 0 &&
      !filter.model.includes(node.model)
    ) {
      return false
    }

    // Filter by asking price
    if (filter.askingPrice && node.askingPrice > filter.askingPrice) {
      return false
    }

    // Filter by mileage
    if (filter.odometerIn && node.odometerIn > filter.odometerIn) {
      return false
    }
    // Filter by mpgcity
    if (filter.mPGCity && node.mPGCity > filter.mPGCity) {
      return false
    }

    // Filter by mpghwy
    if (filter.mPGHwy && node.mPGHwy > filter.mPGHwy) {
      return false
    }

    // Filter by fuel type
    if (filter.fuelType && node.fuelType > filter.fuelType) {
      return false
    }

    // Filter by transmission
    if (filter.transmission && node.transmission > filter.transmission) {
      return false
    }

    // Search functionality
    if (
      search &&
      !`${node.make} ${node.model} ${node.year} ${node.fuelType} ${node.type} ${node.transmission}`
        .toLowerCase()
        .includes(search.toLowerCase())
    ) {
      return false
    }

    return true
  })
}

export default filterVehicles
