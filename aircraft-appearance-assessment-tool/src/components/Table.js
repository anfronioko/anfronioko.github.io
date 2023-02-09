import React, { useState } from 'react';
import './Table.css';
import Row from './Row.js';
import EditWindow from "./EditWindow.js";

function Header() {
    return (
        <tr className="Header">
            <td>Action</td>
            <td>Picture</td>
            <td>Caption</td>
            <td>Number</td>
            <td>Origin</td>
            <td>Destination</td>
            <td>Rating</td>
            <td>Picture quality</td>
            <td>Category</td>
        </tr>
    )
}

function Table({posts}) {
    const [filter, setFilter] = useState("interior");
    const [editMode, setEditMode] = useState(false);

    function setEditModeOn() {
        setEditMode(true);
    }

    function setEditModeOff() {
        setEditMode(false);
    }

    return (
        <div id="content">
            <div id="filter">
                <ul id="filter-list">
                    <li onClick={() => setFilter("interior")}><b>Interior</b></li>
                    <li onClick={() => setFilter("exterior")}>Exterior</li>
                    <li onClick={() => setFilter("unknown")}>Unknown</li>
                </ul>
            </div>
            <table>
                <thead>
                    <Header />
                </thead>
                <tbody>
                    {posts.map((data, index) => {
                        if (data.filter === filter) {
                            return <Row post={data} openOverlay={setEditModeOn} key={index}/>
                        }
                    })}
                </tbody>
            </table>
            {editMode ? <EditWindow closeOverlay={setEditModeOff}/> : null}
        </div>
    )
}

export default Table;