/**
 * @fileoverview Site header component showing the application title and usage
 * hint.
 */
import { SITE_TAGLINE, SITE_TITLE } from "../../config";
import styles from "./Header.module.css";

/** Site header with the application title and a brief usage hint. */
export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{SITE_TITLE}</h1>
            <span className={styles.tagline} aria-hidden="true">
                {SITE_TAGLINE}
            </span>
        </header>
    );
}
