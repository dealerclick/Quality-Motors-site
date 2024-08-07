import { useStaticQuery, graphql } from "gatsby"

const useVehicleData = () => {
  const data = useStaticQuery(graphql`
    query InventoryQuery {
      allVehicle {
        edges {
          node {
            id
            downPmt
            engine
            driveTrain
            fuelType
            images {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
            intColor
            inventoryID
            mPGCity
            mPGHwy
            model
            make
            odometerIn
            optionalEquip
            standardEquip
            specificationEquip
            stockNo
            status
            transmission
            trim
            type
            vin
            year
            askingPrice
          }
        }
      }
    }
  `)

  return data.allVehicle.edges
}

export default useVehicleData
