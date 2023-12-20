import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  faTrashAlt,
  faTrashCan,
  faPenToSquare,
  faCalendar,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
const ToDo = (props) => {
  // const deleteItems = () => {
  //   props.onselect(props.id);
  // };
  console.log(props.nameItem);
  return (
    <>
      <div className="row">
        <span className="itemName">{props.nameItem}</span>
        <span className="elements">
          <FontAwesomeIcon
            onClick={() => props.function(props.id)}
            className="update"
            icon={faCalendar}
          />
          <FontAwesomeIcon
            onClick={() => props.onselect(props.id)}
            className="delete"
            icon={faTrashCan}
          />
        </span>
      </div>
    </>
  );
};
export default ToDo;
