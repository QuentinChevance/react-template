import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ApplicationItem from "./ApplicationItem";
import Application from "../../../domain/Application";

describe("ApplicationItem test", () => {
  test("Should show an item", () => {
    const application: Application = {
      name: "Twitter",
      logo: "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg",
      id: 0,
    };

    const onDelete = () => {};
    render(<ApplicationItem application={application} onDelete={onDelete} />);
    const logo = screen.getByRole("img");
    expect(logo.getAttribute("src")).toBe(application.logo);
    expect(screen.getByText(/Twitter/i)).toBeDefined();
  });
});
