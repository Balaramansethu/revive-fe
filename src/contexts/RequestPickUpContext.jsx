import React from "react";
import { createContext,useState } from "react";

const Requestcontext = createContext({});


export const RequestPickupContextProvider = ({ children }) =>{

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [address, setAddress] = useState("");
    const [showSummary, setShowSummary] = useState(false);
    const [data, setData] = useState([]);


    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => prevQuantity + amount);
    };

    const handleTimeChange = (time) => {
        setSelectedDateTime(time);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files);
    };

    const handleSubmit = () => {
        console.log("Selected Date and Time:", selectedDateTime);
        console.log("Image:", image);
        console.log("Description:", description);
        console.log("Tags:", tags);
        console.log("Quantity:", quantity);
        console.log("Address:", address);
        const Data = {
            date: selectedDateTime,
            img: image,
            desc: description,
            tags: tags,
            qty: quantity,
            adrs: address
        }
        const lst = [...data,Data];
        setData(lst);
        setShowSummary(true);
    };

    

    const obj = {selectedDateTime, image, description, tags, quantity, address, showSummary, setDescription, setTags, setAddress, handleQuantityChange, handleTimeChange, handleImageChange, handleSubmit, data }
    
    return(
        <Requestcontext.Provider value={obj}>
            {children}
        </Requestcontext.Provider>
    )
}
export default Requestcontext;