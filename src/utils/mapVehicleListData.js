/**
 * Maps the vehicle data for the vehicle list page.
 *
 * @param {Object} vehicle - The vehicle object.
 * @returns {Object} - The mapped vehicle data object.
 */
export const mapVehicleListData = vehicle => {
  return {
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
    vin: vehicle.vin,
    type: vehicle.type,
    trim: vehicle.trim,
    odometerIn: vehicle.odometerIn,
    askingPrice: vehicle.askingPrice,
    mPGCity: vehicle.mPGCity,
    downPayment: vehicle.downPmt,
    images: vehicle.images.map(image => 
      image.childImageSharp
        ? image.childImageSharp.gatsbyImageData
        : { publicURL: image.publicURL } // Use publicURL if gatsbyImageData is unavailable
    ),  }
}
