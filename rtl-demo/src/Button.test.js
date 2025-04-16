import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("calls onClick when btn is clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}/>);
    fireEvent.click(screen.getByText("Click Me"));

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
});