export const getPaymentDetails = (creditScore, income, price) => {
  // Default values for credit score, loan term, and income
  const defaultCreditScore = 720
  const defaultLoanTerm = 60
  const defaultIncome = 60000

  // Use context values or default values
  const currentCreditScore = creditScore || defaultCreditScore
  const currentIncome = income || defaultIncome
  const loanTerm = defaultLoanTerm

  // Calculate downPayment and monthlyPayment using the current values
  const downPayment = calculateDownPayment(
    currentCreditScore,
    currentIncome,
    price
  )
  const { monthlyPayment } = calculateMonthlyPayment(
    currentCreditScore,
    loanTerm,
    price,
    downPayment,
    currentIncome
  )

  return {
    downPayment,
    monthlyPayment,
  }
}

export const formatPaymentText = (downPayment, monthlyPayment) => {
  const downPaymentText =
    typeof downPayment === "number" ? downPayment.toFixed(2) : "N/A"
  const monthlyPaymentText =
    typeof monthlyPayment === "number" ? monthlyPayment.toFixed(2) : "N/A"

  return { downPaymentText, monthlyPaymentText }
}

/**
 * Calculate the down payment for a car loan based on credit score, income, and car price.
 * @param {number} creditScore - The buyer's credit score.
 * @param {number} income - The buyer's annual income.
 * @param {number} price - The price of the car.
 * @returns {number} - The calculated down payment.
 */
export const calculateDownPayment = (creditScore, income, price) => {
  let downPaymentPercentage = "2000" // Default to 20%

  if (creditScore < 600) {
    downPaymentPercentage = 0.3 // 30% for bad credit
  } else if (creditScore >= 600 && creditScore < 700) {
    downPaymentPercentage = 0.25 // 25% for average credit
  } else if (creditScore >= 700 && creditScore < 750) {
    downPaymentPercentage = 0.2 // 20% for good credit
  } else if (creditScore >= 750) {
    downPaymentPercentage = 0.15 // 15% for excellent credit
  }

  // Ensure down payment is not more than half of annual income
  const maxDownPayment = income / 2
  const calculatedDownPayment = price * downPaymentPercentage

  return Math.min(calculatedDownPayment, maxDownPayment)
}

/**
 * Calculate the monthly payment for a car loan.
 * @param {number} creditScore - The buyer's credit score.
 * @param {number} loanTerm - The term of the loan in months.
 * @param {number} price - The price of the car.
 * @param {number} downPayment - The down payment made on the car.
 * @param {number} income - The buyer's annual income.
 * @returns {{monthlyPayment: number}} - The calculated monthly payment.
 */
export const calculateMonthlyPayment = (
  creditScore,
  loanTerm,
  price,
  downPayment,
  income
) => {
  const interestRate = getInterestRate(creditScore, income) // Get interest rate based on credit score and income
  const loanAmount = price - downPayment // Calculate loan amount
  const monthlyInterestRate = interestRate / 12 / 100 // Convert annual rate to monthly and percentage to decimal

  // Calculate monthly payment using the formula: M = P[r(1 + r)^n] / [(1 + r)^n – 1]
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -loanTerm))

  return { monthlyPayment }
}

/**
 * Get the interest rate for a car loan based on credit score and income.
 * @param {number} creditScore - The buyer's credit score.
 * @param {number} income - The buyer's annual income.
 * @returns {number} - The interest rate.
 */
const getInterestRate = (creditScore, income) => {
  if (creditScore < 600) {
    return 20 // 10% interest for bad credit
  } else if (creditScore >= 600 && creditScore < 700) {
    return 15 // 7% interest for average credit
  } else if (creditScore >= 700 && creditScore < 750) {
    return 10 // 5% interest for good credit
  } else if (creditScore >= 750) {
    return 6 // 3% interest for excellent credit
  }
}
