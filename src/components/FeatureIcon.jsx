import { useState } from "react";

const FeatureIcon = ({ children }) => {
  const [hover, setHover] = useState(false);

  const iconStyle = {
    fontSize: "4rem",
    color: hover ? "#a92427" : "#c94043",
    transition: "all 0.28s ease",
    transform: hover ? "scale(1.25) rotate(6deg)" : "scale(1)",
    filter: hover
      ? "drop-shadow(0 0 8px rgba(169,36,39,0.45))"
      : "drop-shadow(0 0 3px rgba(0,0,0,0.15))",
    cursor: "pointer",
    display: "inline-block",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/** Clone the icon and inject the style */}
      {children && children.type ? (
        <children.type {...children.props} style={iconStyle} />
      ) : null}
    </div>
  );
};

export default FeatureIcon;
