import React from "react";
import "./list.css";

export default function List({ children }) {
  return <li className="list-wrapp">{children}</li>;
}
