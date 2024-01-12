import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ isOutline, icon, text, ...remaining }) => {
    return (
        <button
            {...remaining}
            className={`${styles.btn} ${styles.hover_border}
                ${isOutline ? styles.outline_btn : styles.primary_btn}`}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button;
