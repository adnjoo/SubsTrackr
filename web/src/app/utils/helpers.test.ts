import { expect, test } from "vitest";

import { classNames } from "./helpers";

test("classNames", () => {
  expect(classNames("bg-white", "rounded-3xl", "h-10", "w-10")).toBe(
    "bg-white rounded-3xl h-10 w-10",
  );
});
