import React from "react";

import "./SidebarOption.css";

function SidebarOption({ option, Icon, onClick }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p onClick={onClick}>{option}</p>}
    </div>
  );
}

export default SidebarOption;
