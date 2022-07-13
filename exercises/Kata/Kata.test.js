import { render, screen, fireEvent } from "@testing-library/react-native";
import Kata from "./Kata";

describe("< Kata />", () => {
  it("should contain a username and password input field", () => {
    render(<Kata />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it("should contain a create user button", () => {
    render(<Kata />);

    const btn = screen.getByText("Create User");
    expect(btn).toBeTruthy();
  });

  it("should create user once the username and password are filled out", () => {
    const mockFn = jest.fn();
    const testUsername = "test-user";
    const testPassword = "AbcD123!@#";
    render(<Kata createUser={mockFn} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.changeText(usernameInput, testUsername);
    fireEvent.changeText(passwordInput, testPassword);

    const btn = screen.getByText("Create User");

    fireEvent.press(btn);

    // TODO: Expect the mock function to have been called with the appropriate arguments.
    // TODO: Expect the text "Password is strong enough!" to be shown.
  });

  it.todo(
    "should not create user if the password does not contain at least 2 capital letters"
  );

  it.todo(
    "should not create user if the password does not contain at least 1 number"
  );

  it.todo(
    "should not create user if the password is not longer than 8 characters"
  );

  it.todo(
    "should not create user if the username is empty but the password is there"
  );
});
