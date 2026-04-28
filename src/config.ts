/**
 * @fileoverview Site-wide configuration used across metadata and the PWA manifest.
 */

/** Base path for the deployment, used as Vite's `base` and the PWA scope/start_url. */
export const SITE_BASE = "/transform-text/";

/** Canonical base URL for the deployed site, including the trailing slash. */
export const SITE_URL = `https://www.karlhorning.dev${SITE_BASE}`;

/** Page title. */
export const SITE_TITLE = "Transform Text";

/** Short name used in the PWA manifest and home screen label (max ~12 chars). */
export const SITE_SHORT_NAME = "Transform Text";

/** Page description used in meta tags and the PWA manifest. */
export const SITE_DESCRIPTION =
  "A developer tool for coding and writing. Paste text, pick a transformation, and copy the result.";

/** Author display name used in metadata. */
export const AUTHOR_NAME = "Karl Horning";

/** Canonical author URL. */
export const AUTHOR_URL = "https://www.karlhorning.dev";

/** Source code repository URL. */
export const REPO_URL =
  "https://github.com/Karl-Horning/transform-text";

/** Year the project was first published, used for the copyright range. */
export const SITE_START_YEAR = 2024;

/** Brand colour for dark mode, used in the PWA manifest and theme-color meta tag. */
export const THEME_COLOR = "#0d0d0d";

/** Brand colour for light mode, used in the theme-color meta tag. */
export const THEME_COLOR_LIGHT = "#f7f4ef";

/** Brief usage hint displayed in the site header. */
export const SITE_TAGLINE = "// paste → pick → copy";
