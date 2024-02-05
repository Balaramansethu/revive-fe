import React,{useState, useRef} from "react";
import "../../assets/css/RequestPickupComponent.css";


export const RequestPickupComponent = () =>{
    const form_data = useRef();

    const [form_info,setForm_info] = useState({});

    const form_content = (event) =>{
        event.preventDefault();
        const name = form_data.current.waste_name.value;
        const door_no = form_data.current.door_no.value;
        const floor = form_data.current.floor.value;
        const street_name = form_data.current.street_name.value;
        const postal_code = form_data.current.postal_code.value;
        const city = form_data.current.city.value;
        const state = form_data.current.state.value;
        const country = form_data.current.country.value;
        setForm_info({name,door_no,floor,street_name,postal_code,city,state,country});
        event.target.reset();
    }
    console.log(form_info);
    

    return(
        <div className="container">
            <br />
            <h1>Pickup Request form</h1>
            <span>
                <h1>#Add attachment component</h1>
            </span>
            <form ref={form_data} onSubmit={(events) => form_content(events)}>
                <input type="text" name="waste_name" placeholder="E-Waste Name"/>
                <h1>Address</h1>
                <input type="text" name="door_no"placeholder="Door No"/>
                <input type="text" name="floor" placeholder="Floor"/>
                <input type="text" name="street_name" placeholder="Street Name"/>
                <input type="text" name="postal_code" placeholder="Postal Code" />
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="state" placeholder="State"/>
                <input type="text" name="country" placeholder="Country"/>


                <div>
                    <h1>#Tags Component</h1>
                </div>
                <div>
                   <h1> #Description Box Component</h1>
                </div>
                <button type="submit">Submit Form</button>

            </form>
        </div>
    )
}
