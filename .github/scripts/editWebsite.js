const fs = require("fs")
const path = require("path")

console.log("makeChanges.js script has been initiated!")

/**
 * Decodes and parses the input data from the command line argument.
 * @param {string} encodedData - The encoded data string from the command line.
 * @returns {Object} The parsed data object.
 */
function parseInputData(encodedData) {
  const dataString = decodeURIComponent(encodedData)
  return JSON.parse(dataString)
}

/**
 * Reads the content from a given file path.
 * @param {string} filePath - The path to the file to read.
 * @returns {string} The content of the file.
 */
function readFileContent(filePath) {
  return fs.readFileSync(filePath, "utf-8")
}

/**
 * Writes updated content to a file.
 * @param {string} filePath - The path to the file where the content should be written.
 * @param {string} content - The content to write into the file.
 */
function writeFileContent(filePath, content) {
  fs.writeFileSync(filePath, content)
  console.log(`Updated values in ${filePath}`)
}

/**
 * Serializes business hours to a string format.
 * @param {Array} businessHours - The business hours to serialize.
 * @returns {string} The serialized business hours string.
 */
function formatBusinessHours(businessHours) {
  return `[\n${businessHours
    .map(hour => `  { day: "${hour.day}", hours: "${hour.hours}" }`)
    .join(",\n")}\n]`
}

/**
 * Replaces the value for a given key in the provided content.
 * @param {string} key - The key whose value needs to be replaced.
 * @param {*} newValue - The new value to set for the key.
 * @param {string} content - The content where the replacement should occur.
 * @returns {string} The content with the replaced value.
 */
function replaceValueForKey(key, newValue, content) {
  console.log(`Replacing key: ${key} with value: ${newValue}`)

  let valueToReplace =
    typeof newValue === "boolean" ? newValue.toString() : `"${newValue}"`
  if (key === "BUSINESS_HOURS") valueToReplace = formatBusinessHours(newValue)

  const regex = new RegExp(
    `(export const ${key} *= *)(\\[.*?\\]|true|false|["'][\\s\\S]*?["'])`,
    "gs"
  )
  if (content.match(regex)) {
    console.log(`Pattern found for key: ${key}`)
    return content.replace(regex, `$1${valueToReplace}`)
  } else {
    console.log(`Pattern not found for key: ${key}`)
    return content // Return unchanged content if pattern not found
  }
}

// Main execution starts here
const encodedData = process.argv[2]
const data = parseInputData(encodedData)
console.log("Decoded data:", data)

const stringsFilePath = path.join(
  __dirname,
  "..",
  "..",
  "src",
  "config",
  "strings.js"
)
let fileContent = readFileContent(stringsFilePath)

// Use the destructured data directly in the loop to avoid redundancy
Object.entries(data).forEach(([key, value]) => {
  if (value !== undefined) {
    // Only proceed if value is not undefined
    fileContent = replaceValueForKey(key.toUpperCase(), value, fileContent)
  }
})

writeFileContent(stringsFilePath, fileContent)
