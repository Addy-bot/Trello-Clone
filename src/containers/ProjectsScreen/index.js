import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate, useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Popup from "../../components/Popup";
import { taskStatus } from "../../utils/MockData/Tasks";
import { onDragEnd } from "./Functions";
import './css/style.css';

const ProjectsScreen = () => {
  const [columns, setColumns] = useState(taskStatus);
  const [popUp, setPopUp] = useState({ show: "false", data: [] });
  const navigateTo = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isEmpty(localStorage.getItem('userData'))) {
      navigateTo('/');
    }
  }, [])

  useEffect(() => {
    if (isEmpty(state)) {
      navigateTo('/Dashboard')
    }
  }, [state]);


  return (
    <div className="main">
      {popUp.show === "true" && <Popup items={popUp} setPopUp={setPopUp} />}
      <h1 className="pageTitle">{state?.title}</h1>
      <p className="pageDescription">{state?.description}</p>
      <div
        className="row"
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className="col-md-3"
                key={columnId}
              >
                <h2 >{column.name}</h2>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "linear-gradient(99deg, rgb(13 110 253 / 43%),transparent)"
                          }}
                          id="column"
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      onClick={() => setPopUp({ show: "true", data: item })}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "darkslategray",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                      id="card"
                                    >
                                      <h6 className="cardTitle">{item.title}</h6>
                                      <p className="cardBody">{item.content}</p>
                                      <p className="cardFooter">{item.assignedTo}</p>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default ProjectsScreen;
