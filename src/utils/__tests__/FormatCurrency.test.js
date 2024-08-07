// src/utils/__tests__/FormatCurrency.test.js

import React from "react"
import { render, screen } from "@testing-library/react"
import FormatCurrency from "../FormatCurrency"

describe("FormatCurrency", () => {
  test("renders the correct currency format for the given value", () => {
    const testValue = 12345
    const expectedFormattedValue = "$12,345"

    render(<FormatCurrency value={testValue} />)

    expect(screen.getByText(expectedFormattedValue)).toBeInTheDocument()
  })

  test("renders zero value as '$0' by default", () => {
    render(<FormatCurrency />)
    expect(screen.getByText("$0")).toBeInTheDocument()
  })
})
