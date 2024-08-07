import { useState, useEffect } from "react"

/**
 * Custom hook to manage favoriting logic for a vehicle.
 * @function useFavorite
 * @param {string} vehicleVin - Vehicle Identification Number.
 * @returns {Object} - An object containing:
 *                     1. isFavorite (boolean) - Represents the favorite status.
 *                     2. handleFavoriteClick (function) - Toggles the favorite status.
 *                     3. animateHeart (boolean) - Indicates whether the heart animation should be triggered.
 */
const useFavorite = vehicleVin => {
  // State variable to hold favorite status
  const [isFavorite, setIsFavorite] = useState(false)

  // State variable to control heart animation
  const [animateHeart, setAnimateHeart] = useState(false)

  /**
   * Effect to initialize `isFavorite` based on session storage.
   * Runs once when `vehicleVin` changes.
   */
  useEffect(() => {
    const storedFavoriteStatus =
      typeof window !== "undefined"
        ? JSON.parse(window.sessionStorage.getItem(vehicleVin))
        : false
    setIsFavorite(storedFavoriteStatus)
  }, [vehicleVin])

  /**
   * Event handler to toggle favorite status.
   * Updates session storage and state variables.
   * @param {Event} e - Event object.
   */
  const handleFavoriteClick = e => {
    e.preventDefault()

    // Toggle favorite status
    const newFavoriteStatus = !isFavorite

    // Trigger heart animation if new status is 'favorited'
    if (newFavoriteStatus) {
      setAnimateHeart(true)
      setTimeout(() => setAnimateHeart(false), 1000)
    }

    // Update favorite status
    setIsFavorite(newFavoriteStatus)

    // Persist the new favorite status in session storage
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        vehicleVin,
        JSON.stringify(newFavoriteStatus)
      )
    }
  }

  // Return state and handlers
  return { isFavorite, handleFavoriteClick, animateHeart }
}

export default useFavorite
