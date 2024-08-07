import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Favorites from "../../assets/images/favorites"
import { keyframes } from "@emotion/react"

const FavoriteButton = ({ vehicleVin, isFavoriteInitially }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animateHeart, setAnimateHeart] = useState(false)

  const pulseAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  `

  const favoriteStyle = {
    animation: animateHeart ? `${pulseAnimation} .5s ease-in-out` : "none",
  }

  useEffect(() => {
    setIsFavorite(
      (typeof window !== "undefined" &&
        JSON.parse(window.sessionStorage.getItem(vehicleVin))) ||
        isFavoriteInitially
    )
  }, [vehicleVin, isFavoriteInitially])

  const handleFavoriteClick = e => {
    e.preventDefault()

    const newFavoriteStatus = !isFavorite
    if (newFavoriteStatus) {
      setAnimateHeart(true)
      setTimeout(() => setAnimateHeart(false), 1000)
    }

    setIsFavorite(newFavoriteStatus)

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        vehicleVin,
        JSON.stringify(newFavoriteStatus)
      )
    }
  }

  return (
    <Box
      onClick={handleFavoriteClick}
      onKeyPress={handleFavoriteClick}
      role="button"
      tabIndex={0}
      aria-pressed={isFavorite}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        color: isFavorite ? "#c0001f" : "transparentWhite2",
        p: 2,
        ...favoriteStyle,
      }}
    >
      <Favorites />
    </Box>
  )
}

FavoriteButton.propTypes = {
  vehicleVin: PropTypes.string.isRequired,
  isFavoriteInitially: PropTypes.bool,
}

export default FavoriteButton
