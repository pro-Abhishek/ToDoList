import React, { cloneElement, useState } from "react";
import image from "./imgs/googleKeep.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  faTrashAlt,
  faTrashCan,
  faPenToSquare,
  faCalendar,
  faSquarePlus,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [listItems, setListItems] = useState([]);
  const [up, setUp] = useState();
  const [toggle, setToggle] = useState(true);
  const inputItems = (event) => {
    setItem(event.target.value);
  };

  const addItems = () => {
    if (item == "") {
      document.getElementById("msg").innerHTML = "field can't be empty...";
    } else {
      setListItems((old) => {
        return [...old, item];
      });
      setItem("");
      document.getElementById("msg").innerHTML = "";
    }
  };

  const deleteItems = (id) => {
    // alert("deleted");
    let msg = prompt("are you sure: (y/n) ?", "");
    if (msg == "y") {
      setListItems((old) => {
        return old.filter((curr, index) => {
          return id != index;
        });
      });
    } else {
      return;
    }
  };

  let index;
  const update = (id) => {
    setToggle(false);
    index = id;
    setItem(listItems[id]);
    alert("updated");

    setListItems((old) => {
      return old.filter((curr, index) => {
        return id != index;
      });
    });
  };

  const upItems = () => {
    setListItems((old) => {
      return [...old, (old[index] = item)];
    });

    setItem("");
    setToggle(true);
  };

  return (
    <>
      <div className="container">
        <img className="logo_note" src={image} alt="note" />
        <h1>ToDoList</h1>
        <div className="input">
          <input
            onChange={inputItems}
            style={{
              backgroundColor: "#f0ca21",
              textDecoration: "none",
              width: "15vw",
              borderRadius: "25px",
              height: "40px",
              textAlign: "center",
              fontSize: "14pt",
              fontWeight: "bold",
              float: "left",
              border: 0,
            }}
            name=""
            id=""
            placeholder="Add..."
            value={item}
          ></input>
          <span
            style={{
              fontWeight: "bold",
              width: "50px",
              marginTop: "10px",
              marginRight: "15px",
              height: "50px",
              float: "right",
              fontSize: "25pt",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {toggle == true ? (
              <FontAwesomeIcon
                onClick={addItems}
                className="add"
                icon={faSquarePlus}
              />
            ) : (
              <FontAwesomeIcon
                onClick={upItems}
                className="add"
                icon={faCalendar}
              />
            )}
          </span>
        </div>

        <p id="msg" style={{ color: "red" }}></p>

        <div className="list">
          {listItems.map((currElem, index) => {
            return (
              <ToDo
                nameItem={currElem}
                key={index}
                id={index}
                onselect={deleteItems}
                function={update}
              ></ToDo>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ToDoList;
