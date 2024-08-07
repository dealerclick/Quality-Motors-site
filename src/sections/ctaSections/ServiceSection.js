/** @jsxImportSource theme-ui */
/**
 * @file Whoa, bro! We're cruising into the second CTA for our gnarly app.
 * This time, it's all about getting users stoked for financing, showing 'em they can catch a wave straight to a new set of wheels.
 * We're hanging ten with Gatsby's GraphQL to snag the perfect image.
 * @module ServiceSection
 * @category Components
 * @see {@link https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql/ | Gatsby GraphQL}
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CtaTemplate from "../../templates/ctaTemplate/CtaTemplate"

/**
 * @function ServiceSection
 * @description Far out! This CTA is all about getting users prequalified for financing.
 * We're fetching the raddest image with Gatsby's GraphQL and setting the stage for a stellar user journey.
 * So wax your board and ride this wave with us!
 * @returns {React.Element} A seriously epic React element, dude.
 * @example <ServiceSection />
 */
const ServiceSection1 = () => {
  /**
   * @name getCarImageData
   * @description We're on the hunt for the perfect car image using GraphQL, like looking for the perfect swell.
   * @type {Object}
   */
  const data = useStaticQuery(graphql`
    query {
      carsImage: file(relativePath: { eq: "service.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350, placeholder: BLURRED)
        }
      }
    }
  `)

  /**
   * @description Here, we're passing the props to our gnarly `CtaTemplate`, and it's doing the heavy lifting for us. Just like catching the perfect wave!
   */
  return (
    <CtaTemplate
      imageData={data.carsImage.childImageSharp.gatsbyImageData}
      imageAlt="Schedule service at Newport Motors"
      heading="Schedule Maintenance or Service"
      description="Our service department is open 6 days a week. Schedule an appointment today!"
      link="/contact"
    />
  )
}

export default ServiceSection1
