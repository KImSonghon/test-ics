import React from "react";

import"../stylecomponent/Navbar.css";

const profileUrl ="https://s3-alpha-sig.figma.com/img/4269/07cc/458052afe359577a66f0cdac017ced71?Expires=1665964800&Signature=JomHS~OKmULQWclsumIN1UD-9ytPqzcWWGt2~Xa9LpdKoblVl6y9nUooOVY6J78qSSPE1Ntiau7AXBncGJ0fjCfNJGPHq~Wkm0qHI4PKDfdZjvQilYF3XOb-33Xqy92AYfLlFztsbkqWQ3gz2MmnNR~Y1CcX4VGyQUIBPwdVA~HTX6qqqkKdeiY6wBVIs2Z2a3Zxpgzu2-kxA~BYnYJpm2KnGxt6dnIoBZS63akhXWpV6OyOHJSwL7unhD43JI4myJBOtgxn1eZ2dG2t4PLqWPexETZtjz8~vVapiSfOjPRzBwmpf~ZUsK8h6TZ5NEqrcJWhTZTad8rJTECOYswjww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

function Navbar(){
     
    return(
        <nav className="nav_top_container">
            <div className="on_mobie" >
                <img id= "ics_logo"src="https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1665964800&Signature=Mwpalx5XA8nLQh9u8-1GrvXKMMT~1XeX18ZFLUr0wdDkTEscfny2KAIrJwqNhpP8VbOg5O9xkH5VOITaiHRONsSUSA0znpa4GuMIhTuZYqtIXFzwmzPi-fjdnSXfiFzZhOQsK00gn5i1K2mE1On9Rz2~HvN40LUA1PKIl5KnTJN2Dj5vdWDBiOmcMXhYQBgHOjjQHRD6Cm9UgiEKEB9IiXUs4QCBJUwqbJX1aELLUEyLwgGFfDI4mnWdv~L1YkpTEgfFs9YBg6cXUmb1YN6SuK83pF2yxxr7HW8sb2t6HkSzFa-GxdkCpZlcDZVb8Ze0Xocnt3q4W6h~kQqyGuY6JQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
            <div className="container">
            
                <i className='fa fa-bell' style={{color:'white'}}></i>
                <img src={profileUrl} alt="profile"/>
                <p>Akkarapol</p>
                <span>{`>`}</span>
            </div>
        </nav>
    );
};

export default Navbar;