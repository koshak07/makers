import React from 'react';
import './SideBar.css'

const SideBar = (props) => {
    // console.log(props);
    return (
        <div style={{
            'backgroundColor': 
            props.place === 'left' ? 'green' : 'brown'
        }} className="sidebar">
            SideBar
        </div>
    );
};

export default SideBar;