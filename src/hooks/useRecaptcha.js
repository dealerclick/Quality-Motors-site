import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

/**
 * @function useRecaptcha
 * @description Dude, this hook is totally tubular! It gives you a ReCAPTCHA component and a value to check if the user has passed the test, man. Catch the wave of security!
 * @returns {Array} An array, man! The first item is your gnarly ReCAPTCHA component, and the second one is the reCAPTCHA value, bro.
 */
export function useRecaptcha() {
  const [value, setValue] = useState(null) // State for holdin' the value, man

  // Displaying the key, bro. Don't worry; it's just the site key, not secret!
  console.log("key", process.env.GATSBY_RECAPTCHA_SITE_KEY)

  // The ReCAPTCHA component, cruisin' with your sitekey, ready to catch some bots
  const RecaptchaComponent = (
    <ReCAPTCHA
      sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
      onChange={newValue => setValue(newValue)} // Update the value when things change, dude
      onExpired={() => setValue(null)} // If it's expired, gotta reset it, bro
    />
  )

  return [RecaptchaComponent, value] // Returnin' the goods, man!
}
