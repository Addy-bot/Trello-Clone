import React from 'react'
import './css/style.css';

const Popup = ({ items = [], setPopUp }) => {
  return (
    <div className='popup'>
      <div className='popup_inner card'>
        <div className="card-body">
          <h1 className="card-title">{items.data.title}</h1>
          <p className="card-text">~ {items.data.content}</p>
          <p className="card-text">{items.data.assignedTo}</p>
          <p className="card-text">Due Date: {items.data.dueDate}</p>
        </div>
        <button className="btn btn btn-danger close" onClick={() => setPopUp({ show: "false", data: [] })}>
          Close</button>
      </div>
    </div>
  );
}

export default Popup