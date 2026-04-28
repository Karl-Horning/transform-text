/** @fileoverview Vitest global setup: extends `expect` with jest-dom and jest-axe matchers. */
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
