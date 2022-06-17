import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <Router>{children}</Router>
  </QueryClientProvider>
);

describe("Home test", () => {
  test("Should show the link", () => {
    render(<Home />, { wrapper });
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/applications");
    expect(link.innerHTML).toBe(
      "Pour consulter la liste des applications, cliquer."
    );
  });
});
