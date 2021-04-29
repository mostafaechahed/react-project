import React from 'react';
import './App.css';

export default function Home(){
    return (
        <div className="container-fluid home" >
            <div className="row">
                <div className="col">
                   <p id="ph">
                        <h1>YOUR FOOD</h1>
                        <h3>Delious and delicious foods</h3>
                   </p>
                <form class="d-flex input justify-content-center">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
                </div>
            </div>

        </div>
    );
}