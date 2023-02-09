import React from 'react';
import './EditWindow.css';

function EditWindow({closeOverlay}) {
    return (
        <div id="gray-background">
            <div id="background" onClick={closeOverlay}></div>
            <div id="edit">
                <p>Edit</p>
                <form>
                    <label>
                        Aircraft Number
                        <input type="text"></input>
                    </label>
                    <label>
                        Depart
                        <input type="text"></input>
                    </label>
                    <label>
                        Arrive
                        <input type="text"></input>
                    </label>
                    <label>
                        Rating (0-10)
                        <input type="text"></input>
                    </label>
                    <label id="filter">
                        Filter
                        <div>
                            <input type="radio" name="filter" value="interior"/>
                            <label>Interior</label>
                            <input type="radio" name="filter" value="exterior"/>
                            <label>Exterior</label>
                        </div>
                        
                    </label>
                    <label>
                        Category
                        <select>
                            <option value="tray">Tray</option>
                            <option value="light">Light</option>
                            <option value="seat">Seat</option>
                        </select>
                    </label>
                    <input id="submit" type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
}

export default EditWindow;