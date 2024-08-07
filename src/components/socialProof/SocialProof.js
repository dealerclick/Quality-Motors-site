/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Text } from "theme-ui"
import { AiFillHeart, AiOutlineEye } from "react-icons/ai"
import {
  sectionStyle,
  outerBoxStyle,
  innerBoxStyle,
  heartIconStyle,
  eyeIconStyle,
  textStyle,
} from "./socialProofStyles"

const SocialProof = ({ savedCount, viewsCount }) => {
  return (
    <section
      data-nav-section="social-proof"
      id="social-proof"
      sx={sectionStyle}
    >
      <Box sx={outerBoxStyle}>
        <Box sx={innerBoxStyle}>
          <AiFillHeart sx={heartIconStyle} />
          <Text as="span" sx={textStyle}>
            {savedCount}
          </Text>
          <Text as="span"> 27 Saves</Text>
        </Box>
        <Box sx={innerBoxStyle}>
          <AiOutlineEye sx={eyeIconStyle} />
          <Text as="span" sx={textStyle}>
            {viewsCount}
          </Text>
          <Text as="span">189 Views</Text>
        </Box>
      </Box>
    </section>
  )
}

export default SocialProof
