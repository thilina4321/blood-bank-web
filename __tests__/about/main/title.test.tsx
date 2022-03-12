import { render, screen } from "@testing-library/react";
import AboutMainTitle from "../../../components/about/main/Title";

describe("AboutMain Title", () => {
  it("render the title", () => {
    render(<AboutMainTitle />);

    const { textContent } = screen.getByText("Lets Make A Different Today", {
      exact: false,
    });

    expect(textContent)
  });
});
