import React from "react";
import { render } from "@testing-library/react";
import Medias from "./index";

test("Проверка наличия всех ссылок", () => {
  const { getByText } = render(<Medias />);

  const vkLink = getByText("VK");
  expect(vkLink).toBeInTheDocument();
  expect(vkLink).toHaveAttribute("href", "https://vk.com");

  const telegramLink = getByText("TELEGRAM");
  expect(telegramLink).toBeInTheDocument();
  expect(telegramLink).toHaveAttribute("href", "https://telegram.me");
});
