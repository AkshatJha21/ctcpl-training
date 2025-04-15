import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Counter', () => {

    test("counter displays correct initial count", () => {
        render(<Counter initialCount={0}/>);

        const countValue = Number(screen.getByTestId("count").textContent);

        expect(countValue).toEqual(0);
    });

    test("increment count on clicking increase btn", () => {
        render(<Counter initialCount={0}/>);

        const incrementBtn = screen.getByRole("button", { name: "Increase" });
        const countBefore = Number(screen.getByTestId("count").textContent);

        expect(countBefore).toEqual(0);
        fireEvent.click(incrementBtn);

        const countAfter = Number(screen.getByTestId("count").textContent);

        expect(countAfter).toEqual(1);
    });

    test("decrement count on clicking decrease btn", () => {
        render(<Counter initialCount={1}/>);

        const decrementBtn = screen.getByRole("button", { name: "Decrease" });
        const countBefore = Number(screen.getByTestId("count").textContent);

        expect(countBefore).toEqual(1);
        fireEvent.click(decrementBtn);

        const countAfter = Number(screen.getByTestId("count").textContent);

        expect(countAfter).toEqual(0);
    });

    test("reset count to 0 on clicking restart btn", () => {
        render(<Counter initialCount={4}/>);

        const restartBtn = screen.getByRole("button", { name: "Restart" });
        const countBefore = Number(screen.getByTestId("count").textContent);

        expect(countBefore).toEqual(4);
        fireEvent.click(restartBtn);

        const countAfter = Number(screen.getByTestId("count").textContent);

        expect(countAfter).toEqual(0);
    }); 

    test("switch signs on clicking switch btn", () => {
        render(<Counter initialCount={7}/>);

        const switchBtn = screen.getByRole("button", { name: "Switch" });
        const countBefore = Number(screen.getByTestId("count").textContent);

        expect(countBefore).toEqual(7);
        fireEvent.click(switchBtn);

        const countAfter = Number(screen.getByTestId("count").textContent);
        
        expect(countAfter).toEqual(-7);
    });
});

