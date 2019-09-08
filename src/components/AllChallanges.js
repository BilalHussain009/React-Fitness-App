import React from 'react';
import {Link} from 'react-router-dom';
const AllChallanges=()=>(
    <div>
        <h4>
            All Challanges
        </h4>
        <Link to='/chooseMode'>Full Body WorkOut</Link>
        <Link to='/chooseMode'>ABS Workout</Link>
        <Link to='/chooseMode'>Butt Workout</Link>
        <Link to='/chooseMode'>Arm WorkOut</Link>
        <Link to='/chooseMode'>Leg WorkOut</Link>

    </div>
);
export default AllChallanges;