/** @jsxImportSource theme-ui */
/**
 * @file Dude, this is where we like, set up the CTA Component for, like, our righteous app, you know?
 * It's all about getting users to swap out their old carriages for some fresh wheels, man.
 * It's imported from Gatsby, and it's, like, real gnarly, totally tubular.
 * @module TradeInSection
 * @category Components
 * @see {@link https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql/ | Gatsby GraphQL}
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CtaTemplate from "../../templates/ctaTemplate/CtaTemplate"

/**
 * @function TradeInSection
 * @description Like, this is our gnarly CTA component, dude. We're using static queries to snag the images we need.
 * Then we're laying it all out with some super chill styles and some JSX goodness. So grab your board and let's ride!
 * @returns {React.Element} A totally tubular React element.
 * @example <TradeInSection />
 */
const TradeInSection1 = () => {
  /**
   * @name getCarImageData
   * @description Fetches the image data for the car image, dude. We're using Gatsby's GraphQL magic to grab this data, like a surfer catching a wave.
   * @type {Object}
   */
  const data = useStaticQuery(graphql`
    query {
      carsImage: file(relativePath: { eq: "tradeIn.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 350, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <CtaTemplate
      imageData={data.carsImage.childImageSharp.gatsbyImageData}
      imageAlt="trade in your car"
      heading="Get Top Dollar for Your Trade"
      description="We give top dollar for your trade. We will buy your car even if you don't buy from us!"
      link="/financing"
      imageOnRight
    />
  )
}

export default TradeInSection1
