import React from "react";

import { LoginScreen } from ".";

import { render } from "@test/jest.utils";
import { act, fireEvent, screen } from "@testing-library/react-native";

describe("Login screen actions", () => {
  const mockedValues = {
    identifier: {
      valid: "04263024001",
      invalid: "123456789101",
    },
    password: {
      valid: "123456",
      invalid: "123",
    },
  };

  beforeEach(() => {
    render(<LoginScreen />);
  });

  describe("Form validation", () => {
    it("should throw indentifier message error when indentifier field is invalid", async () => {
      fireEvent.changeText(
        screen.getByTestId("indentifier-field"),
        mockedValues.identifier.invalid,
      );

      fireEvent.changeText(
        screen.getByTestId("password-field"),
        mockedValues.password.valid,
      );

      await act(async () => {
        fireEvent.press(screen.getByTestId("submit-button"));
      });

      expect(screen.queryByTestId("error-message")).toBeTruthy();
    });

    it("should throw password message error when password field is invalid", async () => {
      fireEvent.changeText(
        screen.getByTestId("indentifier-field"),
        mockedValues.identifier.valid,
      );

      fireEvent.changeText(
        screen.getByTestId("password-field"),
        mockedValues.password.invalid,
      );

      await act(async () => {
        fireEvent.press(screen.getByTestId("submit-button"));
      });

      expect(screen.queryByTestId("error-message")).toBeTruthy();
    });

    it("shouldn't throw any message error when form is valid", async () => {
      fireEvent.changeText(
        screen.getByTestId("indentifier-field"),
        mockedValues.identifier.valid,
      );

      fireEvent.changeText(
        screen.getByTestId("password-field"),
        mockedValues.password.valid,
      );

      await act(async () => {
        fireEvent.press(screen.getByTestId("submit-button"));
      });

      expect(screen.queryByTestId("error-message")).not.toBeTruthy();
    });
  });

  // TODO: API integration tests
  // describe("API request handle", () => {

  // })
});
