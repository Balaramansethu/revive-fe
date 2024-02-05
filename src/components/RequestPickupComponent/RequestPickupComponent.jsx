import React from "react";
import "java.css";


export const RequestPickupComponent = () =>{
    return(
        <div className="container">
            <br />
            <span>
                Box
            </span>
            <span>
                <input type="text" placeholder="E-Waste Name"/>
                <h1>Address</h1>
                <input type="text" placeholder="Door No"/>
                <input type="text" placeholder="Floor"/>
                <input type="text" placeholder="Street Name"/>
                <input type="text" placeholder="Postal Code" />
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="State"/>
                <input type="text" placeholder="Country"/>

                <div>
                    Tags
                </div>
                <div>
                    Description Box
                </div>
            </span>
        </div>
    )
}