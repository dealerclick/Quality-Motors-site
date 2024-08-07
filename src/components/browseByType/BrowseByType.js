/** @jsxImportSource theme-ui */
import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Container, Text } from "theme-ui"
import {
  containerStyles,
  boxStyles,
  vehicleImageStyles,
  flexStyles,
  specialtyBoxStyles,
} from "./browseByTypeStyles"
import { WANTS_SPECIALTY_TYPES } from "../../config/strings"

/**
 * Component for browsing vehicles by type.
 * It adjusts the images of vehicles for dark mode using a color overlay.
 *
 * @returns {JSX.Element} The BrowseByType component.
 */
const BrowseByType = (title) => {
  const data = useStaticQuery(graphql`
    query {
      sedanImage: file(relativePath: { eq: "car.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      suvImage: file(relativePath: { eq: "suv.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      truckImage: file(relativePath: { eq: "truck.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      vanImage: file(relativePath: { eq: "van.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      coupeImage: file(relativePath: { eq: "coupe.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      hatchbackImage: file(relativePath: { eq: "hatchback.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      convertibleImage: file(relativePath: { eq: "convertible.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      wagonImage: file(relativePath: { eq: "wagon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      awd4wdImage: file(relativePath: { eq: "awd-4wd.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      hybridImage: file(relativePath: { eq: "awd-4wd.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      luxuryImage: file(relativePath: { eq: "luxury.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      commercialImage: file(relativePath: { eq: "awd-4wd.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  const vehicleTypes = [
    {
      image: data.sedanImage.childImageSharp.gatsbyImageData,
      alt: "Car Icon",
      type: "Sedan",
      slug: "Car",
    },
    {
      image: data.suvImage.childImageSharp.gatsbyImageData,
      alt: "SUV Icon",
      type: "SUV",
      slug: "SUV",
    },
    {
      image: data.truckImage.childImageSharp.gatsbyImageData,
      alt: "Trucks Icon",
      type: "Truck",
      slug: "Truck",
    },
    {
      image: data.vanImage.childImageSharp.gatsbyImageData,
      alt: "Van Icon",
      type: "Van",
      slug: "Van",
    },
    {
      image: data.coupeImage.childImageSharp.gatsbyImageData,
      alt: "Coupe Icon",
      type: "Coupe",
      slug: "Coupe",
    },
    {
      image: data.suvImage.childImageSharp.gatsbyImageData,
      alt: "Hatchback Icon",
      type: "Hatchback",
      slug: "Hatchback",
    },
    {
      image: data.convertibleImage.childImageSharp.gatsbyImageData,
      alt: "Convertible Icon",
      type: "Convertible",
      slug: "Convertible",
    },
    {
      image: data.wagonImage.childImageSharp.gatsbyImageData,
      alt: "Wagon Icon",
      type: "Wagon",
      slug: "Wagon",
    },
  ]

  /* reactivate for specialty types after Peyman adds them to the inventory objects */
  const specialtyVehicleTypes = [
    {
      image: data.awd4wdImage.childImageSharp.gatsbyImageData,
      alt: "AWD Icon",
      type: "AWD/4WD",
      slug: "AWD-4WD",
    },
    {
      image: data.luxuryImage.childImageSharp.gatsbyImageData,
      alt: "Luxury Icon",
      type: "Luxurious",
      slug: "Luxury",
    },
    {
      image: data.hybridImage.childImageSharp.gatsbyImageData,
      alt: "Hybrid/Electric Icon",
      type: "Hybrid/Electric",
      slug: "Hybrid-Electric",
    },
    {
      image: data.commercialImage.childImageSharp.gatsbyImageData,
      alt: "Commercial Icon",
      type: "Commercial",
      slug: "Commercial",
    },
  ]

  return (
    <Container sx={containerStyles}>
      <Text variant="heading">Browse By Type</Text>
      <Box sx={flexStyles}>
        {vehicleTypes.map((vehicle, index) => (
          <Box
            key={index}
            sx={boxStyles}
            onClick={() => navigate(`/inventory/?type=${vehicle.slug}`)}
          >
            <Box sx={vehicleImageStyles}>
              <GatsbyImage image={vehicle.image} alt={vehicle.alt} />
            </Box>
            <Text>{vehicle.type}</Text>
          </Box>
        ))}
      </Box>
      {/* /* reactivate for specialty types after Peyman adds them to the inventory
      objects */}
      {WANTS_SPECIALTY_TYPES && (
      <Box sx={flexStyles}>
        {specialtyVehicleTypes.map((vehicle, index) => (
          <Box
            key={index}
            sx={specialtyBoxStyles}
            onClick={() => navigate(`/inventory/?type=${vehicle.slug}`)}
          >
            <Text>{vehicle.type}</Text>
            <Box sx={vehicleImageStyles}>
              <GatsbyImage image={vehicle.image} alt={vehicle.alt} />
            </Box>
          </Box>
        ))}
      </Box>
      )}
    </Container>
  )
}

export default BrowseByType
