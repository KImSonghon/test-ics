import React from "react";

import "../stylecomponent/Placelist.css"


function Placelist(){
   
  

    return(
        <section className="placelist_container">
            <h5>Place List</h5>
            <div className="key">
            <input  list="restaurant_types" id="restaurant_type" name="type-choice" placeholder="Restaurant"/>
                <datalist   id="restaurant_types">
                    <option value="Restaurant"/>
                    <option value="Bakery"/>
                    <option value="Cafe"/>
                </datalist>
             <div className="border"/>    
            <input   id="search" type="text" placeholder="Search name..."/>
            </div>
        </section>
    );
};

export default Placelist;