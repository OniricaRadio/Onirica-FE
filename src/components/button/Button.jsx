import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ text, icon, alt, to, type = "button", className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={handleClick}
    >
      {icon && (
        <img
          src={icon}
          alt={alt || text || "icon"}
          className={styles.icon}
        />
      )}
      {text && <span>{text}</span>}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string, 
  alt: PropTypes.string, 
  to: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

