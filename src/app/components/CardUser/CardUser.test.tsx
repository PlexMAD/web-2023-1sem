import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardUser from "./";

describe("Карточка", () => {
  test("Карточка отображается правильно", async () => {
    const userData = {
      userId: 1,
      username: "asd",
      postCount: 3,
      registrationDate: "03.03.2003",
      achievements: ["zxc", "qwe"],
    };

    render(<CardUser data={userData} />);

    expect(screen.getByText(userData.username)).toBeInTheDocument();
    expect(screen.getByText(userData.postCount.toString())).toBeInTheDocument();
    expect(screen.getByText(userData.registrationDate)).toBeInTheDocument();
    userData.achievements.forEach((achievement) => {
      expect(screen.getByText(new RegExp(achievement))).toBeInTheDocument();
    });
  });
});
