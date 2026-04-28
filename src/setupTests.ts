/**
 * @fileoverview Vitest global setup. Extends `expect` with jest-dom matchers
 * and the jest-axe `toHaveNoViolations` matcher.
 */
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
