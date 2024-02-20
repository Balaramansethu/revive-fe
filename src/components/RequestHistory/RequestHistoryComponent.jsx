import React from "react";
import "./../../assets/css/RequestHistory.css"
import { useContext } from "react";
import Requestcontext from "../../contexts/RequestPickUpContext";

const RequestElements = ({ele}) =>{
    return(
        <div>
            <img />
            <p># Request Name</p>
            <div>
                Created at: {ele.date.toString()}
            </div>
            <p># Tags : {ele.tags.map((tag)=> {return(<p>{tag}</p>)})
            }</p>
            <p>Quantity: {ele.qty}</p>
            <p>{ele.desc}</p>

        </div>
    )
}

const RequestHistoryComponent = () =>{

    const {data} = useContext(Requestcontext);

    return(
        <div className="Container">
            <h1>Your Request History</h1>

            <div>
                {
                    data.map((ele,key) => {
                        console.log(ele.tags);
                        return (
                            <RequestElements ele = {ele}></RequestElements>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RequestHistoryComponent;