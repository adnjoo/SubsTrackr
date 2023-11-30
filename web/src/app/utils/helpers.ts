/**
 * Concatenates and returns a string of classNames based on the provided arguments.
 * Falsy values are filtered out before concatenation.
 * @param classes - List of classNames or conditional classNames.
 * @returns A string of concatenated classNames.
 */
export function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
