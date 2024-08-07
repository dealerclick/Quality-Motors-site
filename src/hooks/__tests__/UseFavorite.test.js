import { renderHook, act } from "@testing-library/react-hooks"
import useFavorite from "../useFavorite"

describe("useFavorite custom hook", () => {
  // Simulate sessionStorage
  let mockSessionStorage = {}
  beforeEach(() => {
    mockSessionStorage = {}
    global.window.sessionStorage = {
      getItem: jest.fn(key => mockSessionStorage[key]),
      setItem: jest.fn((key, value) => {
        mockSessionStorage[key] = value
      }),
    }
  })

  it("should set isFavorite to false by default", () => {
    const { result } = renderHook(() => useFavorite("1234"))
    expect(result.current.isFavorite).toBe(false)
  })

  it("should read from sessionStorage for default isFavorite value", () => {
    window.sessionStorage.setItem("1234", JSON.stringify(true))
    const { result } = renderHook(() => useFavorite("1234"))
    expect(result.current.isFavorite).toBe(true)
  })

  it("should toggle isFavorite state when handleFavoriteClick is invoked", () => {
    const { result } = renderHook(() => useFavorite("1234"))
    act(() => {
      result.current.handleFavoriteClick(new Event("click"))
    })
    expect(result.current.isFavorite).toBe(true)
    expect(window.sessionStorage.getItem("1234")).toEqual("true")
  })

  // Add more test cases as needed
})
