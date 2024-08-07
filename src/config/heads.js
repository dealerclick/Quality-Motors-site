import React from "react"
import { Helmet } from "react-helmet"
import { DEALERSHIP_NAME } from "./strings"

/* 

Meta descriptions should be between 50 and 300 characters. And titles should be between 10 and 70 characters and end with the company name. Both must be a string literals, not a template literals. Also, don't put more than one exclamation mark in the title or description. It will cause an SEO error.

*/

export const HomePageHead = () => (
  <Helmet>
    <title>{DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content="We have a wide selection of preowned cars, trucks, and SUVs. We offer financing and warranties."
    />
  </Helmet>
)

export const InventoryPageHead = () => (
  <Helmet>
    <title>Inventory - {DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content="Our inventory is always changing. Check out our current selection of preowned vehicles."
    />
  </Helmet>
)

export const InventoryDetailPageHead = props => (
  <Helmet>
    <title>{props.title + " " + DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content={
        props.meta +
        "is a great vehicle. We offer financing on all our vehicles! Stop by today for a test drive."
      }
    />
  </Helmet>
)

export const FinancingPageHead = () => (
  <Helmet>
    <title>Financing - {DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content="Get prequalified for financing today with no hit to your credit!"
    />
  </Helmet>
)

export const ContactPageHead = () => (
  <Helmet>
    <title>Contact Us - {DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content="Learn more about {DEALERSHIP_NAME} and our commitment to providing quality preowned vehicles."
    />
  </Helmet>
)

export const FourOhFourPageHead = () => (
  <Helmet>
    <title>Oops! 404 Error - {DEALERSHIP_NAME}</title>
    <meta
      name="description"
      content="It looks like you've reached a secret page! You better go before someone sees you!"
    />
  </Helmet>
)
