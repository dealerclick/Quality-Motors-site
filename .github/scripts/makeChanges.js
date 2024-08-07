const fs = require("fs");
const path = require("path");

/**
 * Decodes and parses the input data from the command line argument.
 * 
 * @param {string} encodedData The base64 encoded JSON string.
 * @return {Object} The parsed JSON object.
 */
function parseInputData(encodedData) {
  const dataString = decodeURIComponent(encodedData);
  return JSON.parse(dataString);
}

/**
 * Generates the configuration content based on the provided data.
 * 
 * @param {Object} data The data received from the front end.
 * @return {string} The generated configuration content.
 */
function generateConfigContent(data) {
  const businessHours = data.businessHours.map(hour => 
    `  { day: "${hour.day}", hours: "${hour.hours}" }`
  ).join(",\n");

  return `export const DEALERSHIP_NAME = "${data.dealershipName}";
export const LOGO_PATH = "/images/logo.png";
export const FAVICON_PATH = "/images/favicon.png";
export const TAGLINE = "${data.tagline}";
export const ADDRESS = "${data.address}";
export const PHONE_NUMBER = "${data.phoneNumber}";
export const EMAIL = "${data.email}";
export const COLOR_SCHEME = "${data.colorScheme}";

export const BUSINESS_HOURS = [
${businessHours}
];

export const WANTS_TOP_BAR = ${data.wantsTopBar};
export const WANTS_FOOTER = ${data.wantsFooter};

export const WANTS_FOOTER_SOCIAL = ${data.wantsFooterSocial};
export const WANTS_FACEBOOK = ${data.wantsFacebook};
export const WANTS_INSTAGRAM = ${data.wantsInstagram};
export const WANTS_TWITTER = ${data.wantsTwitter};

export const HAS_CARFAX = ${data.hasCarfax};
export const HAS_VEHICLE_PAYMENTS = ${data.hasVehiclePayments};

export const WANTS_CARD_FOOTER = ${data.wantsCardFooter};
export const WANTS_CARD_TOP_LABELS = ${data.wantsCardTopLabels};
export const WANTS_FAVORITES = ${data.wantsFavorites};
export const WANTS_SOCIAL_PROOF = ${data.wantsSocialProof};

export const WANTS_FINANCING = ${data.wantsFinancing};
export const WANTS_FINANCING_SECTION = ${data.wantsFinancingSection};
export const FINANCING_TITLE = "${data.financingTitle}";
export const FINANCING_SUBTITLE = "${data.financingSubtitle}";
export const FIN_CONTACT_TITLE = "${data.finContactTitle}";

export const WANTS_INVENTORY_SCROLL = ${data.wantsInventoryScroll};
export const INVENTORY_SCROLL_NUMBER = "${data.inventoryScrollNumber}";
export const WANTS_BROWSE_BY_TYPE = ${data.wantsBrowseByType};
export const WANTS_SPECIALTY_TYPES = ${data.wantsSpecialtyTypes};

export const WANTS_TRADE_SECTION = ${data.wantsTradeSection};
export const WANTS_SERVICE_SECTION = ${data.wantsServiceSection};
export const WANTS_TESTIMONIAL_SCROLL = ${data.wantsTestimonialScroll};

export const MAP_URL = "${data.mapUrl}";
export const MAP_LINK_URL = "${data.mapLinkUrl}";

export const VEHICLE_CARD_LOW_PRICE = "${data.vehicleCardLowPrice}";
export const VEHICLE_CARD_LOW_MILES = "${data.vehicleCardLowMiles}";
export const VEHICLE_CARD_INSPECTED_TEXT = "Dealer Inspected";
export const VEHICLE_CARD_PRIMARY_FOOTER_TEXT = "${data.vehicleCardPrimaryFooterText}";
export const VEHICLE_CARD_SECONDARY_FOOTER_TEXT = "${data.vehicleCardSecondaryFooterText}";

export const DISCLAIMER = "${data.disclaimer}";

export const CONTACT_FORM_TITLE = "${data.contactFormTitle}";
export const CONTACT_FORM_SUBTITLE = "${data.contactFormSubtitle}";
export const CON_CONTACT_TITLE = "${data.conContactTitle}";

export const TESTIMONIALS = [
  {
    name: "John Darnold",
    title: "Satisfied Customer",
    testimonial:
      "The dealership was very helpful, and the staff were friendly and knowledgeable. I got a great deal on my new car, and the process was seamless and quick.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Happy Buyer",
    testimonial:
      "The customer service here is excellent. They helped me find the perfect car for my needs and budget. Their transparency and honesty were much appreciated.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    title: "Long-time Customer",
    testimonial:
      "I have been coming to this dealership for years, and they never disappoint. They have a wide variety of cars and are always upfront about costs and features.",
    rating: 5,
  },
  {
    name: "Bob Williams",
    title: "First-time Buyer",
    testimonial:
      "As a first-time car buyer, I appreciated the patience and guidance the dealership provided. They made sure I understood everything and didn’t pressure me.",
    rating: 4,
  },
  {
    name: "Charlie Brown",
    title: "Returning Customer",
    testimonial:
      "This is the third car I’ve bought from this dealership, and every experience has been great. The staff is friendly, and their after-sales service is superb.",
    rating: 5,
  },
  {
    name: "Donna Davis",
    title: "Satisfied Customer",
    testimonial:
      "They made the process of trading in my old car for a new one so easy. They gave me a fair price and handled all the paperwork efficiently.",
    rating: 5,
  },
  {
    name: "Edward Johnson",
    title: "Happy Buyer",
    testimonial:
      "The dealership was able to answer all my questions and provide me with all the information I needed. Their level of service and commitment is commendable.",
    rating: 4,
  },
  {
    name: "Fiona White",
    title: "First-time Buyer",
    testimonial:
      "Their selection of cars is excellent, and the staff was very patient and knowledgeable. I never felt rushed or pushed into making a decision.",
    rating: 4,
  },
  {
    name: "George Thompson",
    title: "Long-time Customer",
    testimonial:
      "This dealership always provides top-notch service. Their staff is efficient and friendly, and they have always been able to meet my needs and exceed my expectations.",
    rating: 5,
  },
  {
    name: "Helen Martin",
    title: "Returning Customer",
    testimonial:
      "The finance team at this dealership is incredible. They helped me secure a fantastic financing deal and made sure I understood all the terms and conditions.",
    rating: 5,
  },
]

`;
}

/**
 * Main function that orchestrates reading input data, generating config content,
 * and writing to the configuration file.
 */
function main() {
  const encodedData = process.argv[2];
  const data = parseInputData(encodedData);
  
  const configContent = generateConfigContent(data);
  
  const stringsFilePath = path.join(__dirname, "..", "..", "src", "config", "strings.js");
  writeFileContent(stringsFilePath, configContent);
}

// Write content to the specified file.
function writeFileContent(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`Configuration file updated at ${filePath}`);
}

main();
