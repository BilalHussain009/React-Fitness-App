import React from 'react';
import { Progress } from 'semantic-ui-react'

import {Link} from 'react-router-dom';
const AllChallanges=()=>(
    <div class='back-challanges'>
        <h4>
            All Challanges
        </h4>
        <div className="wrapper">
      <div className="cards">
        <Link to='/merch' className="flink">
        <div className="card">
       
          <div className="card-content">
            
            <div className="bottom">
              <h2>FULL BODY WORKOUT</h2>
              
              
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://i.imgur.com/IfAsMfj.jpg"
              alt="leafs"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://i.imgur.com/IfAsMfj.jpg"
              alt="leafs"
            />
          </div>
        </div>
        {/* <div className="card">
          <div className="card-content">
            <div className="top">
              <h3 className="name">20% Off</h3>
             
            </div>
            <div className="bottom">
              <h2>Creators Design Your Merch Here</h2>
              
              
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://images.unsplash.com/photo-1554826762-cffbbe6672d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80"
              alt="leafs"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg"
              alt="leafs"
            />
          </div>
        </div> */}
        </Link>
        <Link to='/merch' className="flink">
        <div className="card">
          <div className="card-content">
            <div className="top">
              
            </div>
            <div className="bottom">
              <h2>ABS WORKOUT</h2>
            
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://i.imgur.com/tUa785E.jpg"
              alt="colorful smoke"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://i.imgur.com/tUa785E.jpg"
              alt="colorful smoke"
            />
          </div>
        </div>
        </Link>
        <Link to='/merch' className="flink">
        <div className="card">
          <div className="card-content">
            <div className="top">
              
            </div>
            <div className="bottom">
              <h2>BUTT WORKOUT</h2>
            
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://i.imgur.com/9V3R3jv.jpg"
              alt="colorful smoke"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://i.imgur.com/9V3R3jv.jpg"
              alt="colorful smoke"
            />
          </div>
        </div>
        </Link>
        <Link to='/merch' className="flink">
        <div className="card">
          <div className="card-content">
            <div className="top">
              
            </div>
            <div className="bottom">
              <h2>LEG WORKOUT</h2>
            
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://i.imgur.com/dkC4AGZ.jpg"
              alt="colorful smoke"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://i.imgur.com/dkC4AGZ.jpg"
              alt="colorful smoke"
            />
          </div>
        </div>
        </Link>
 
      </div>
    </div>
    </div>
);
export default AllChallanges;