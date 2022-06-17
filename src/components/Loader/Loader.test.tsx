import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Loader from "./Loader";

describe("Loader test", () => {
  test("Should show Chargement en cours...", () => {
    render(<Loader />);
    expect(screen.getByText(/Chargement en cours.../i)).toBeDefined();
  });

  test("Should show other loading message", () => {
    render(<Loader value="Chargement des applications..." />);
    expect(screen.getByText(/Chargement des applications.../i)).toBeDefined();
  });
});
