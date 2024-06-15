import { Link, NavLink } from "react-router-dom";
import headerStyles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav id={headerStyles.nav}>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <img
                            id={headerStyles.logo_1}
                            src="images/brand_logo.png"
                            alt="logo"
                        ></img>
                    </Link>
                </div>
                <ul id={headerStyles.menu}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${headerStyles.menu_item} ${headerStyles.btn}
                                    ${
                                        isActive
                                            ? "color-1-global active-border-global"
                                            : "color-2-global"
                                    }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "color-1-global active-border-global"
                                        : "color-2-global"
                                } 
                                    ${headerStyles.menu_item} 
                                    ${headerStyles.btn}`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                `
                                        ${
                                            isActive
                                                ? "color-1-global active-border-global"
                                                : "color-2-global"
                                        }
                                        ${headerStyles.menu_item} 
                                        ${headerStyles.btn}
                                    `
                            }
                        >
                            Our Users
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "color-1-global active-border-global"
                                        : "color-2-global"
                                } ${headerStyles.menu_item} ${headerStyles.btn}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <button
                    className={`${headerStyles.login_btn} ${headerStyles.btn}`}
                >
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </button>
            </nav>

            <ul id={headerStyles.menu_small}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "color-1-global active-border-global"
                                    : "color-2-global"
                            } ${headerStyles.menu_item} ${headerStyles.btn}`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "color-1-global active-border-global"
                                    : "color-2-global"
                            } ${headerStyles.menu_item} ${headerStyles.btn}`
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "color-1-global active-border-global"
                                    : "color-2-global"
                            } ${headerStyles.menu_item} ${headerStyles.btn}`
                        }
                    >
                        Our Users
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "color-1-global active-border-global"
                                    : "color-2-global"
                            } ${headerStyles.menu_item} ${headerStyles.btn}`
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <hr
                className={`${headerStyles.horizontal_rule} horizontal-rule-global`}
            />
        </header>
    );
}
