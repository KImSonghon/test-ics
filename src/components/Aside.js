import React from "react";

import "../stylecomponent/Aside.css"

function Aside(){

    const icsUrl = "https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1665964800&Signature=Mwpalx5XA8nLQh9u8-1GrvXKMMT~1XeX18ZFLUr0wdDkTEscfny2KAIrJwqNhpP8VbOg5O9xkH5VOITaiHRONsSUSA0znpa4GuMIhTuZYqtIXFzwmzPi-fjdnSXfiFzZhOQsK00gn5i1K2mE1On9Rz2~HvN40LUA1PKIl5KnTJN2Dj5vdWDBiOmcMXhYQBgHOjjQHRD6Cm9UgiEKEB9IiXUs4QCBJUwqbJX1aELLUEyLwgGFfDI4mnWdv~L1YkpTEgfFs9YBg6cXUmb1YN6SuK83pF2yxxr7HW8sb2t6HkSzFa-GxdkCpZlcDZVb8Ze0Xocnt3q4W6h~kQqyGuY6JQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

    return(
        <aside className="aside_container">
            <div className="aside_logo">
                <img src={icsUrl} alt="logo"/>
            </div>
            
            
            <i className="fa-solid fa-list" ></i>
           
           
        </aside>
    );
};

export default Aside;