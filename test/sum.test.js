import { expect } from "@esm-bundle/chai";
import { sum } from "../src/smoketest.js";

it("sums up two numbers", () => {
  expect(sum(1, 2)).to.equal(3);
  expect(sum(3, 12)).to.equal(15);
});
