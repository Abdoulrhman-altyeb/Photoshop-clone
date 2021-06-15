import React from 'react';

const SidebarBTN = ({name ,handelChange, active}) => {
    return(
            <button className={`sidebar-btn ${active ? 'active' : '' }`} onClick={handelChange}>{name}</button>
    )
}

export default SidebarBTN;