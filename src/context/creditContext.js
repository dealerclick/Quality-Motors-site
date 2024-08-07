import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * @description Context for credit-related data.
 */
export const CreditContext = createContext()

/**
 * @description Provider component for credit-related data.
 * @param {object} children - The child components.
 */
export const CreditProvider = ({ children }) => {
  const [creditScore, setCreditScore] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem("creditScore")
      try {
        return storedValue ? JSON.parse(storedValue) : null
      } catch (error) {
        console.error("Error parsing creditScore:", error)
        return null
      }
    }
    return null
  })

  const [income, setIncome] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem("income")
      try {
        return storedValue ? JSON.parse(storedValue) : null
      } catch (error) {
        console.error("Error parsing income:", error)
        return null
      }
    }
    return null
  })

  const [loanTerm, setLoanTerm] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem("loanTerm")
      try {
        return storedValue ? JSON.parse(storedValue) : null
      } catch (error) {
        console.error("Error parsing loanTerm:", error)
        return null
      }
    }
    return null
  })

  const [apiData, setApiData] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [formState, setFormState] = useState(null)
  const [zip, setZip] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("creditScore", JSON.stringify(creditScore))
    }
  }, [creditScore])

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("income", JSON.stringify(income))
    }
  }, [income])

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("loanTerm", JSON.stringify(loanTerm))
    }
  }, [loanTerm])

  return (
    <CreditContext.Provider
      value={{
        creditScore,
        setCreditScore,
        income,
        setIncome,
        apiData,
        setApiData,
        firstName,
        setFirstName,
        lastName,
        loanTerm,
        setLoanTerm,
        setLastName,
        address,
        setAddress,
        city,
        setCity,
        formState,
        setFormState,
        zip,
        setZip,
      }}
    >
      {children}
    </CreditContext.Provider>
  )
}

CreditProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
