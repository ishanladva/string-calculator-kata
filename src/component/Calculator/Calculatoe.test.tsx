import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { stringCalculator } from "../../utils/stringCalculator";

import Calculator from "./Calculator";

describe("HeaderMessage", () => {
  it("render header message", () => {
    render(<Calculator />);
    expect(screen.getByTestId("header-text")).toHaveTextContent(
      "String Calculator Kata"
    );
  });
});

//Test Cases for String calculator function

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(stringCalculator("5")).toBe(5);
  });

  it("should return the sum of two numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("should handle newlines as delimiters", () => {
    expect(stringCalculator("7\n1,2")).toBe(10);
  });

  it("should handle with different delimiters", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  it("should handle multiple custom delimiters", () => {
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
  });

  it("should handle multiple complex custom delimiters", () => {
    expect(stringCalculator("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => stringCalculator("1,-2,3")).toThrow(
      "Negatives not allowed: -2"
    );
  });
});
