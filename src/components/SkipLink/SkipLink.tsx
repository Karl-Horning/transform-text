/**
 * @fileoverview Skip-to-content link for keyboard users.
 */
import styles from "./SkipLink.module.css";

/** Visually hidden link that reveals on focus and jumps to the main content region. */
export function SkipLink() {
    return (
        <a href="#main-content" className={styles.skipLink}>
            Skip to main content
        </a>
    );
}
