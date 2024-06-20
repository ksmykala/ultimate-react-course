import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 5,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#007bff",
  expanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const words = children.split(" ");
  const slicedText = words.slice(0, collapsedNumWords).join(" ");
  const ellipsis = words.length > collapsedNumWords ? "..." : "";
  const displayText = isExpanded ? children : slicedText + ellipsis;

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "0.5rem",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
