import React from "react";
import "./WidgetCard.css";

function WidgetCard({ title, value }) {
  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default WidgetCard;
