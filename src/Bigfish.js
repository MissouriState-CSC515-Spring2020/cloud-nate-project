import React, { useEffect } from 'react';
import './App.css';

function Bigfish() {

    useEffect(() => {
        fetchItems();
    }, []);


    async function fetchItems() {
        try {
            const data = [0, 2, 3, 4, 5, 6, 7, 8, 9]; //await fetch(
            //    'https://google.com');
            //const items = await data.json();

            console.log(data);
            console.log("trying");
        }
        catch (rejectedValue) {
            console.log("nope");
        }
    };

    return (
        <div>
            <title>Photos:BigFish</title>
            <div className="start-template">
                <br />
                <h2>Big fishy photos</h2>
                <br />
                <p className="lead">Below are photos categorized as, Big Fish.</p>
                <br />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <title>Big Fish</title>
                                    <a href="deets"><img src="imgs/shark1.jpg" alt="Shark one" height="100%" width="100%" /></a>
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
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <title>Big Fish</title>
                                    <a href="deets"><img src="imgs/shark2.jpg" alt="Shark two" height="100%" width="100%" /></a>
                                    <div className="card-body">
                                        <p className="card-text">Last opened 2/7/20 at 11:00:02</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </div>
                                            <small className="text-muted">2/6/20</small>
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

export default Bigfish;
