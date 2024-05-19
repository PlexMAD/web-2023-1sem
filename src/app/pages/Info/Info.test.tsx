import { describe } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import Info from ".";

describe("Info", () => {
  test("Выдает ошибку если ничего не введено", async () => {
    render(<Info />);
    act(() => {
      fireEvent.click(screen.getByText("Сохранить"));
    });
    await waitFor(() => {
      expect(screen.getByText(/Поле обязательно для заполнения/)).toBeInTheDocument();
      expect(screen.getByText(/Required/)).toBeInTheDocument();
    });
  });
});
