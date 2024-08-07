/**
 * gatsby-node.js
 *
 * This file is part of Gatsby's Node.js-based build-time APIs.
 * It is used to control aspects of the Gatsby build process such as
 * dynamic page creation, adding third-party webpack configurations,
 * and more.
 *
 * For more information, see: https://www.gatsbyjs.com/docs/node-apis/
 */

const axios = require("axios")
const path = require("path")

/**
 * This function creates individual pages for each vehicle using GraphQL data.
 *
 * @param {Object} options - The options object.
 * @param {Function} options.graphql - The GraphQL function to execute queries.
 * @param {Object} options.actions - The actions object from Gatsby's build process.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Execute GraphQL query to fetch all vehicle data
  const result = await graphql(`
    query {
      allVehicle {
        edges {
          node {
            vin
            year
            make
            model
          }
        }
      }
    }
  `)

  const vehicles = result.data.allVehicle.edges

  /**
   * Fetches the Carfax URL for a given VIN.
   *
   * @param {string} vin - The Vehicle Identification Number (VIN).
   * @returns {Promise<string|null>} - The Carfax URL if the request is successful, null otherwise.
   * @throws {Error} - Throws an error if the request fails.
   *
   * @example
   * const carfaxURL = await fetchCarfaxURL("1HGCM82633A123456");
   */
  const carfaxURLs = {}

  for (let edge of vehicles) {
    const vehicle = edge.node
    let carfaxURL

    // Fetch Carfax URL via a serverless function if the environment is configured to use Carfax
    if (process.env.GATSBY_HAS_CARFAX === "1") {
      try {
        const response = await axios.post(
          "/.netlify/functions/fetchCarfaxURL",
          {
            vin: vehicle.vin,
            dealerId: process.env.GATSBY_DEALER_ID,
            locationId: process.env.GATSBY_LOCATION_ID,
          }
        )

        carfaxURL = response.data.carfaxURL
      } catch (error) {
        console.error(
          `Failed to fetch Carfax URL for VIN ${vehicle.vin}: `,
          error
        )
        carfaxURL = null
      }
    }

    // Create individual pages for each vehicle
    createPage({
      path: `/inventory/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.vin}`,
      component: path.resolve(
        `./src/templates/vehicleDetailPage/VehicleDetailPage.js`
      ),
      context: {
        vin: vehicle.vin,
        carfaxURL: carfaxURL,
      },
    })
  }

  // Create an aggregate page for listing all vehicles
  createPage({
    path: `/inventory`,
    component: path.resolve(
      `./src/templates/vehicleListPage/VehicleListPage.js`
    ),
    context: {
      vehicles: vehicles.map(vehicle => vehicle.node.vin),
    },
  })
}
