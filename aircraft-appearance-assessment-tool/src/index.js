import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.js';
import DashboardNav from './components/DashboardNav.js';
import Table from './components/Table.js';
import DashboardTwitterHandler from './handlers/DashboardTwitterHandler.js';
import DATA from './config/Result.js';
import reportWebVitals from './reportWebVitals';

function getTwitterPosts() {
    const dashboardTwitterHandler = new DashboardTwitterHandler();
    const data = dashboardTwitterHandler.getPosts();
    console.log(data);
    return DATA;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div id="body">
        <DashboardNav />
        <Table posts={getTwitterPosts()}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
