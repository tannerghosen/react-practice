import { Outlet, Link } from "react-router-dom";
import LightSwitch from "../LightSwitch";

/*
The outlet component allows nested routes to render their element content out and
anything else the layout route (this) is rendering, like navbars, sidebars, layout specifics.
This allows us to put the pre-rendered contents for pages like Home, Burger and Pizza in Outlet,
without having to reload elements already made (hence why this layout is used, so you don't reload
links or containers or headers.
Link simply lets us link to the other routes by clicking on it, landing us at another pre-rendered
page. 
*/
const Layout = () => {
    return (
        <>
            <div id="header" className="header"><h1>My First React App</h1></div>
            <div className="container">
            <Outlet />
            <div className="linkcontainer">
            <Link to="/">Home</Link> <Link to="/Pizza">Pizza</Link> <Link to="/Burger">Burger</Link>
            <br></br>
            <span id="lightswitch" onClick={LightSwitch}>💡</span> Toggle Light/Dark Mode
            </div>
            </div>
        </>
    )
};

export default Layout;
