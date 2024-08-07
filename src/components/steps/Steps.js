/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Flex, Text } from "theme-ui"
import { FaDollarSign, FaCalendarCheck, FaCar } from "react-icons/fa"
import { Link } from "gatsby"
import {
  containerStyle,
  titleStyle,
  flexContainerStyle,
  boxBaseStyle,
  iconBoxStyle,
  boldTextStyle,
  linkTextStyle,
} from "./stepsStyles"
/**
 * @function Steps
 * @description Component that displays a series of steps.
 */
const Steps = () => {
  return (
    <Box sx={containerStyle}>
      <Text as="h3" sx={titleStyle}>
        Ready to get started?
      </Text>
      <Flex sx={flexContainerStyle}>
        <Box sx={boxBaseStyle}>
          <Box sx={iconBoxStyle}>
            <FaDollarSign size={32} />
          </Box>
          <Link style={{ color: "inherit" }} to="/financing">
            <Text as="p" sx={linkTextStyle}>
              1. Build your deal
            </Text>
          </Link>
          <Text as="p">
            Find financing options, value your trade-in, and choose service and
            protection plans.
          </Text>
        </Box>
        <Box sx={boxBaseStyle}>
          <Box sx={iconBoxStyle}>
            <FaCalendarCheck size={32} />
          </Box>
          <Text as="p" sx={boldTextStyle}>
            2. Choose pick up time
          </Text>
          <Text as="p">
            Schedule a time to get your new car at the dealership.
          </Text>
        </Box>
        <Box sx={boxBaseStyle}>
          <Box sx={iconBoxStyle}>
            <FaCar size={32} />
          </Box>
          <Text as="p" sx={boldTextStyle}>
            3. Finalize your sale
          </Text>
          <Text as="p">
            Head to the dealership to finish up your sale in less than 15
            minutes.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Steps
