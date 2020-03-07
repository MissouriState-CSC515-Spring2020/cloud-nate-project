import React from 'react';
import './App.css';

function Littlefish() {

    return (
        <div>
            <div className="start-template">
                <br />
                <h2>Little fishy photos</h2>
                <br />
                <p className="lead">Below are photos categorized as, Little Fish.</p>
                <br />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <title>Big Fish</title>
                                    <a href="deets">
                                        <img src="imgs/goldfsh.jpg" alt="Goldfish one" height="100%" width="100%" />
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Last opened 2/7/20 at 01:33:32</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </div>
                                            <small className="text-muted">2/7/20</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>Created by Nate V: 2/21/2020</p>
        </div>
    );
}

export default Littlefish;
