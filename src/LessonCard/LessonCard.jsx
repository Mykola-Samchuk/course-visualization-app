import React, { useState } from "react";
import Button from "../Button/Button";
import List from "../List/List";
import Modal from "../Modal/Modal";
import "./lesson-card.css";
import logo from "./img/logo.png";

export default function LessonCard({ item }) {
  // modal close / open
  const [modalActive, setModalActive] = useState();

  // complete add / remove
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div onClick={(e) => {e.stopPropagation(); setModalActive(true);}} className={`lesson-card ${complete ? "active" : ""}`}>
        
        <div className="lesson-img">
          <img src={logo} alt="log-img" />
        </div>
        <div className="title-wrapp">
          <div className="title">
            
            <h3>{item.title}</h3>
          </div>
          <div className="type">
            <h4>Type: {item.type}</h4>
          </div>
        </div>

        <div className="lesson-option">
          <Button onClick={(e) => {e.stopPropagation(); setComplete(!complete);}} title={!complete ?"Complete" : "Remove Complete"}/>
        </div>

      </div>

      { <Modal active={modalActive} setActive={setModalActive}>
          <div className="lesson-plan">
            <div className="plan-title">Plan:</div>
            <ul className="plan-list">

              { /* audit list have key keyPoints*/
                item.keyPoints ? (
                  item.keyPoints.map((el) => {return <List key={el}>{el}</List>;})
                ) : (<li>Пусто</li>)
              }

            </ul>
          </div>

          <div className="lesson-links">
            <div className="links-title">Links:</div>
            <ul className="links-list">

              { /* audit list have key links*/
                item.links ? (
                  item.links.map((el, index) => {
                    return (<List key={index}><a target="blanket" href={el[1]}>{el[0]}</a></List>);})
                ) : (<li>Пусто</li>)
                }

            </ul>
          </div>

          {/* form */}
          <form>
            <label htmlFor="">Comemnts</label>
            <textarea name="comments" rows="3"></textarea>
          </form>
        </Modal>
      }
    </>
  );
}
