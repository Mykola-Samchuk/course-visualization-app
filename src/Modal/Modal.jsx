import React from "react";
import "./modal.css"

export default function Modal({active, setActive, children}){
    return(
        <div className={`modal ${active ? "active" : ""}`} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}