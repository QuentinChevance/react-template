import { act, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, test } from "vitest";
import { DarkModeProvider } from "../../contexts/DarkModeContext";
import DarkMode from "./DarkMode";

const wrapper = ({ children }: { children: ReactNode }) => (
  <DarkModeProvider>{children}</DarkModeProvider>
);

describe("DarkMode test", () => {
  test("Should show the sun on initial mount", () => {
    render(<DarkMode />, { wrapper });
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    const svg = screen.getByTestId("sun");
    expect(svg).toBeDefined();
  });

  test("Should switch to moon on click", () => {
    render(<DarkMode />, { wrapper });
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    act(() => {
      button.click();
    });
    const svg = screen.getByTestId("moon");
    expect(svg).toBeDefined();
  });
});
