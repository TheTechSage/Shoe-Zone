import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr
                className={`${styles.horizontal_rule} horizontal-rule-global`}
            />

            <div className={styles.footer_section_1}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img
                            id={styles.logo_2}
                            src="images/brand_logo.png"
                            alt="logo"
                        ></img>
                    </Link>
                </div>

                <div className={styles.footer_section_2}>
                    <div className={styles.subheading_section}>
                        <h2>Resources</h2>
                        <ul className="">
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="/"
                                    className={styles.subheading_links}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="/about"
                                    className={styles.subheading_links}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.subheading_section}>
                        <h2 className="">Follow us</h2>
                        <ul className="">
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="https://github.com/"
                                    className={styles.subheading_links}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </Link>
                            </li>
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="https://discord.com/"
                                    className={styles.subheading_links}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.subheading_section}>
                        <h2 className="">Legal</h2>
                        <ul className="">
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="#"
                                    className={styles.subheading_links}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className={styles.subheading_list_item}>
                                <Link
                                    to="#"
                                    className={styles.subheading_links}
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
