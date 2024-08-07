import { useState, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * @description Custom hook for managing inventory filters.
 * @param {string} initialTypeFilter - Initial type filter value.
 * @returns {[object, function]} - Returns an array containing the filter object and the function to update the filter.
 */
const useInventoryFilter = initialTypeFilter => {
  const [filter, setFilter] = useState({
    year: "",
    make: "",
    model: "",
    type: initialTypeFilter,
    price: "",
    monthlyPayment: "",
    downPayment: "",
  })

  useEffect(() => {
    setFilter(prevFilter => ({ ...prevFilter, type: initialTypeFilter }))
  }, [initialTypeFilter])

  return [filter, setFilter]
}

useInventoryFilter.propTypes = {
  initialTypeFilter: PropTypes.string.isRequired,
}

export default useInventoryFilter
