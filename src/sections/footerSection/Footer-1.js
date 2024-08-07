/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Divider, Flex, Heading, Text } from "theme-ui"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
// import { StaticImage } from "gatsby-plugin-image"
import {
  footerStyles,
  socialLinksBoxStyles,
  socialLinkStyles,
  dividerStyles,
  // logoStyles,
  boxStyles,
  headingStyles,
  hoursTextStyles,
  siteMapLinkStyles,
} from "./footer-1-Styles"
import { DEALERSHIP_NAME, BUSINESS_HOURS, TAGLINE, WANTS_FACEBOOK, WANTS_FINANCING, WANTS_FOOTER_SOCIAL, WANTS_INSTAGRAM, WANTS_TWITTER } from "../../config/strings"
import { Link } from "gatsby"

  // Access the environment variable
  const showFinancing = WANTS_FINANCING === true

const siteMapLinks = [
  { path: "/", name: "Home" },
  { path: "/inventory", name: "Inventory" },
  showFinancing ? { path: "/financing", name: "Financing" } : null,
  { path: "/contact", name: "Contact" },
].filter(Boolean)


const SocialLink = ({ href, title, children }) => (
  <Box sx={socialLinkStyles}>
    <Link to={href} rel="noreferrer" target="_blank" sx={{ color: "primary" }}>
      {children}
    </Link>
  </Box>
)

const SiteMapLink = ({ name, path }) => (
  <Link sx={siteMapLinkStyles} to={path}>
    {name}
  </Link>
)


const FooterSection = ({ title, children }) => (
  <Box sx={boxStyles}>
    <Heading sx={headingStyles}>{title}</Heading>
    <Divider sx={dividerStyles} />
    {children}
  </Box>
)

const Footer1 = () => (
  <Box as="footer" sx={footerStyles}>
    <FooterSection title={DEALERSHIP_NAME}>
      <Text as="h4">{TAGLINE}</Text>
    </FooterSection>

    <FooterSection title="Site Map">
      <Flex sx={{ flexWrap: "wrap" }}>
        {siteMapLinks.map(link => (
          <SiteMapLink key={link.name} name={link.name} path={link.path} />
        ))}
      </Flex>
    </FooterSection>

    <FooterSection title="Hours of Operation">
      <Flex sx={{ flexWrap: "wrap" }}>
        {BUSINESS_HOURS.map((item, index) => (
          <Box key={index} sx={hoursTextStyles}>
            <Text as="h4">
              {item.day} {item.hours}
            </Text>
          </Box>
        ))}
      </Flex>
    </FooterSection>

    {WANTS_FOOTER_SOCIAL && (
      <FooterSection title="Follow Us">
        <Box sx={socialLinksBoxStyles}>
          {WANTS_FACEBOOK && (
            <SocialLink
              href="https://facebook.com/dealerclick"
              title="Facebook"
            >
              <FaFacebook size="35" />
            </SocialLink>
          )}
          {WANTS_INSTAGRAM && (
            <SocialLink
              href="https://instagram.com/dealerclickdms"
              title="Instagram"
            >
              <FaInstagram size="35" />
            </SocialLink>
          )}
          {WANTS_TWITTER && (
            <SocialLink href="https://twitter.com/dealerclick" title="Twitter">
              <FaTwitter size="35" />
            </SocialLink>
          )}
        </Box>
      </FooterSection>
    )}
  </Box>
)

export default Footer1
