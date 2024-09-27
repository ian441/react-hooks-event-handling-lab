import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Keypad from "../components/Keypad";

 

//  beforeEach(() => {
//    screen = render (<Keypad />).screen;
// });

test("displays one input", () => {
  render (<Keypad />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input.tagName).toBe("INPUT");
});

test("displays an input with the right input type", () => {
  const input = screen.getByRole("textbox");
  expect(input.type).toBe("password");
});

test("typing in the input triggers console output", () => {
  console.log = jest.fn();

  const input = screen.getByRole("input");
  fireEvent.change(input, { target: { value: "123" } });

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Entering password...");
});
