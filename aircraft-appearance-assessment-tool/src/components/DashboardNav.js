import React from 'react';
import './DashboardNav.css';

function DashboardNav() {
    return (
        <div className="dashboard-nav">
            <ul>
                <li>Dashboard
                <ul>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Uploads</a></li>
                    <li><a href="">Gmail</a></li>
                </ul>
                </li>
                <li>Sign out</li>
            </ul>
        </div>
    )
}

export default DashboardNav;