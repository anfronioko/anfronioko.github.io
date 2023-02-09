import React, { useState } from 'react';
import './Row.css';
import logo from "./../pictures/2023-01-united-airlines-quality-assurance-logo.png";
import EditWindow from "./EditWindow.js";

function Row({post, openOverlay}) {
    return (
        <tr>
            <td>
                <button id="edit-button" onClick={openOverlay}>Edit</button>
            </td>
            <td><img src={logo}/></td>
            <td id="caption-cell">{
                post.caption.length > 30 ?
                    <div>
                        {post.caption.substring(0, 27) + "..."}
                        <button id="viewmore-button">View more</button>
                    </div>
                    :post.caption
                }
            </td>
            <td>{post.number}</td>
            <td>{post.origin}</td>
            <td>{post.destination}</td>
            <td>{post.rating}</td>
            <td>{post.pictureQuality}</td>
            <td>{post.category}</td>
        </tr>
    )
}

export default Row;