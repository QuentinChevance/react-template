import { act, fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { beforeEach, describe, expect, test } from "vitest";
import AddApplication from "./AddApplication";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("AddApplication test", () => {
  beforeEach(() => {
    act(() => {
      render(<AddApplication />, { wrapper });
    });
  });
  test("Should show initial button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.innerHTML).toBe("Ajouter une application");
  });

  test("Should show form after clicking the button", () => {
    const accessButton = screen.getByRole("button");
    act(() => {
      accessButton.click();
    });
    const inputs = screen.getAllByRole("textbox");
    const validateButton = screen.getByRole("button");

    expect(inputs.length).toBe(2);
    expect(validateButton.innerHTML).toBe("Valider");
  });

  test("Should submit values", () => {
    const accessButton = screen.getByRole("button");
    act(() => {
      accessButton.click();
    });
    const inputs: HTMLInputElement[] = screen.getAllByRole("textbox");

    act(() => {
      fireEvent.change(inputs[0], { target: { value: "Twitter" } });
      fireEvent.change(inputs[1], {
        target: {
          value:
            "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg",
        },
      });
    });
    expect(inputs[0].value).toBe("Twitter");
    expect(inputs[1].value).toBe(
      "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"
    );
    act(() => {
      const validateButton = screen.getByRole("button");
      validateButton.click();
    });
    expect(accessButton).toBeDefined();
  });
});
