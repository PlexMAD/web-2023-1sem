import { act } from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Create from "./";

describe("Создать пост", () => {
  test("Создает пост", async () => {
    render(<Create />);
    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Введите заголовок"), { target: { value: "Test Title" } });
      fireEvent.change(screen.getByPlaceholderText("Введите текст"), { target: { value: "Test Text" } });
      fireEvent.submit(screen.getByRole("my-form"));
    });

    await waitFor(() => {
      expect(screen.getByText(/Test Title/)).toBeInTheDocument();
      expect(screen.getByText(/Test Text/)).toBeInTheDocument();
    });
  });

  test("Проверяет что ошибка если маленький текст", async () => {
    render(<Create />);
    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Введите заголовок"), { target: { value: "Test Title" } });
      fireEvent.change(screen.getByPlaceholderText("Введите текст"), { target: { value: "1" } });
      fireEvent.submit(screen.getByRole("my-form"));
    });

    await waitFor(() => {
      expect(screen.getByText(/Нужно больше символов/)).toBeInTheDocument();
    });
  });
  test("Проверяет что ошибка если большой заголовок", async () => {
    render(<Create />);
    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Введите заголовок"), {
        target: { value: "Test Title 11113424232341111" },
      });
      fireEvent.change(screen.getByPlaceholderText("Введите текст"), { target: { value: "1" } });
      fireEvent.submit(screen.getByRole("my-form"));
    });

    await waitFor(() => {
      expect(screen.getByText(/Нужно меньше символов/)).toBeInTheDocument();
    });
  });
});
