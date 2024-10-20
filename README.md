# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# String Calculator

This project implements a simple **String Calculator** function that adds numbers passed as a string input. The function handles multiple delimiters, including commas, newlines, and custom delimiters.

## Features

1. **Basic Addition (Comma-Separated Numbers)**:
   The calculator can handle strings containing numbers separated by commas.

   - Input: `"1,2"`
   - Output: `3`

2. **Handling Empty Input**:
   If the input is an empty string, the function returns `0`.

   - Input: `""`
   - Output: `0`

3. **Handling Any Number of Inputs**:
   The function can handle an arbitrary number of numbers passed in the string.

   - Input: `"1,2,3,4"`
   - Output: `10`

4. **Handling Newline Delimiters**:
   The calculator allows the use of newline (`\n`) as a valid delimiter between numbers.

   - Input: `"1\n2,3"`
   - Output: `6`

5. **Custom Delimiters**:
   The function allows specifying custom delimiters. The format to specify a delimiter is `//[delimiter]\n[numbers...]`. Any string can be used as a delimiter (e.g., `;`, `|`, `***`, etc.).

   - Input: `"//;\n1;2"`
   - Output: `3`
   - Input: `"//***\n1***2***3"`
   - Output: `6`

6. **Negative Number Handling**:
   If a negative number is passed to the calculator, it throws an exception with the message `"negative numbers not allowed: <negative_numbers>"`. If there are multiple negative numbers, they will all be listed in the exception message, separated by commas.
   - Input: `"1,-2,3"`
   - Output: Exception: `negative numbers not allowed: -2`
   - Input: `"1,-2,-3"`
   - Output: Exception: `negative numbers not allowed: -2, -3`

## Function Signature

```typescript
function add(numbers: string): number {
  // Implementation goes here
}
```
