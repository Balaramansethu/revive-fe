import React, { useState } from "react";
import InputTag from "../RequestPickupComponent/InputTag"; 
import "../RequestPickupComponent/RequestPickupComponent.css";

const RequestPickupComponent = () => {
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [quantity, setQuantity] = useState(0); 

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const handleSubmit = () => {
    console.log("Image:", image);
    console.log("Description:", description);
    console.log("Tags:", tags);
    console.log("Quantity:", quantity);
  };

  return (
    <div className="container">
      <div className="image-container">
        {Array.from(image).map((item, index) => (
          <span key={index}>
            <img
              style={{ padding: "10px" }}
              width={150}
              height={100}
              src={item ? URL.createObjectURL(item) : null}
              alt={`Product ${index + 1}`}
            />
          </span>
        ))}
      </div>
      <input
        onChange={(e) => {
          setImage(e.target.files);
        }}
        multiple
        type="file"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        placeholder="description"
      />
      <div className="quantity-container">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          readOnly
          className="quantity-input"
        />
        <button onClick={() => handleQuantityChange(1)}>+</button>
        <div className="quantity-head">Quantity</div>
      </div>
      <InputTag tags={tags} setTags={setTags} />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default RequestPickupComponent;
