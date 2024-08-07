import PropTypes from "prop-types"

/**
 * @description This is one tubular function, man! Takes any string and turns the first letter of each word capital, while the rest stay lowercase.
 * If it's "BMW", it stays all caps, bro! And if there's a hyphen, we handle that too.
 *
 * @param {string} string - The string you wanna transform, dude.
 * @return {string} The string with the first letter of each word capitalized, rest lowercase, unless it's "BMW" or got a hyphen.
 *
 * @example
 * capitalizeWords("surf's up") // returns "Surf's Up"
 */
function capitalizeWords(string) {
  if (string.toUpperCase() === "BMW") return "BMW"

  // Making sure the string is all lowercase, then splitting it into words or parts separated by hyphen
  return string
    .toLowerCase()
    .split(/[\s-]/)
    .map(
      word =>
        // Taking the first letter and making it uppercase, then adding the rest of the word as is
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ") // Joining it all back together with a space in between
    .replace(/\s-\s/g, "-") // Putting back any hyphens if there were any, dude!
}

// Adding some PropTypes to make sure we're catching the right wave
capitalizeWords.propTypes = {
  string: PropTypes.string.isRequired,
}

export default capitalizeWords
