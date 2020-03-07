import React from 'react';
import './App.css';

function Deets() {

    return (
        <div>
            <title>Photos:BigFish</title>
            <div className="start-template">
                <div className="starter-template">
                    <h2>Details about a photo</h2>
                    <br />
                    <p className="lead">Below is a description of a photo of a little goldfish.</p>
                    <br />
                    <a href="deets"><img src="imgs/goldfsh.jpg" alt=" Goldfish" height="100%" width="100%" /></a>
                    <p> <br />
                        This goldfish is not gold in color. <br />
                        File Type: JPG File <br />
                        File Size: 28 KB <br />
                        File Dimensions: 675 x 450 px
                    </p>
                </div>
            </div>
            <p>Created by Nate V: 2/21/2020</p>
        </div >
    );
}

export default Deets;
