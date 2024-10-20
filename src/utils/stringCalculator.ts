export const stringCalculator = (input: string): number => {
  if (!input) return 0;

  let delimiters = /,|\n/;

  if (input.startsWith("//")) {
    const delimiterPartEnd = input.indexOf("\n");
    const delimiterPart = input.slice(2, delimiterPartEnd);
    input = input.slice(delimiterPartEnd + 1);

    const customDelimiters = delimiterPart.match(/\[(.*?)\]/g);
    if (customDelimiters) {
      delimiters = new RegExp(
        customDelimiters
          .map((d) =>
            d.slice(1, -1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
          )
          .join("|")
      );
    } else {
      delimiters = new RegExp(
        delimiterPart.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
      );
    }
  }

  const numbers = input.split(delimiters).map((num) => parseInt(num));

  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(
      `Negative numbers are not allowed: ${negatives.join(", ")}`
    );
  }
  return numbers
    .filter((num) => num <= 1000)
    .reduce((sum, acc) => sum + acc, 0);
};
