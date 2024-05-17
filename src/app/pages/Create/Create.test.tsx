import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Create from "./";

describe("Create component", () => {
  test("renders form elements and saves task", async () => {
    const { debug } = render(<Create />);

    fireEvent.change(screen.getByPlaceholderText("Введите заголовок"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByPlaceholderText("Введите текст"), { target: { value: "Test Text" } });

    fireEvent.click(screen.getByText("Сохранить"));

    await waitFor(
      () => {
        expect(screen.getByText(/Test Title/)).toBeInTheDocument();
        expect(screen.getByText(/Test Text/)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );

    debug();
  });
});
