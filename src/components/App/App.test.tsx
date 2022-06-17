import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AppContainer from "./AppContainer";

describe("AppContainer test", () => {
  test("Should link button from Home component", () => {
    render(<AppContainer />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/applications");
    expect(link.innerHTML).toBe(
      "Pour consulter la liste des applications, cliquer."
    );
  });
});
