import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import useDarkMode from "../useDarkMode";

const original = console.error;

describe("useDarkMode test", () => {
  afterEach(() => {
    console.error = original;
  });
  test("Should throw error when no DarkModeProvider", () => {
    // Hides the error thrown by the hook when there is no provider
    console.error = vi.fn();
    expect(() => renderHook(() => useDarkMode())).toThrow(
      "The hook useDarkMode must be used inside a DarkModeProvider"
    );
  });
});
