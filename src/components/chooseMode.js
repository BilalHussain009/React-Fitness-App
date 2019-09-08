import React from 'react';
import {Link} from 'react-router-dom';
const chooseMode=()=>(
    <div>
        <h1>Work Out name here</h1>
        <Link to='/dashboard'>Easy1</Link>
        <Link to='/dashboard'>Easy2</Link>
        <Link to='/dashboard'>Medium1</Link>
        <Link to='/dashboard'>Medium2</Link>
        <Link to='/dashboard'>Hard1</Link>
        <Link to='/dashboard'>Hard2</Link>

    </div>
);
export default chooseMode;