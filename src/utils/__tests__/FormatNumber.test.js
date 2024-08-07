import React from "react"
import { render, screen } from "@testing-library/react"
import FormatNumber from "../FormatNumber"

describe("FormatNumber", () => {
  test("renders the correct number format for the given value with a comma as a thousands separator", () => {
    const testValue = 12345
    const expectedFormattedValue = "12,345 miles"

    render(<FormatNumber value={testValue} />)

    expect(screen.getByText(expectedFormattedValue)).toBeInTheDocument()
  })

  test("renders zero value as '0 miles' by default", () => {
    render(<FormatNumber />)
    expect(screen.getByText("0 miles")).toBeInTheDocument()
  })
})
