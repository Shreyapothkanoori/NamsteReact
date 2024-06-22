import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () =>{


    const[btnName,setBtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedIn} = useContext(UserContext);
    return (
        <div className="header flex h=[200px] bg-pink-200 justify-between">
           <div className="logo-container">
            <img className="logo w-[100px] h-[100px]" src={LOGO_URL} alt="logo"/>
            </div> 
            <div className="nav-items p-4 m-4">
                <ul className="flex">
                    <li className="mx-3">OnlineStatus : {onlineStatus ? "✅": "🔴"}</li>
                    <li className="mx-3"><Link to="/">Home</Link></li>
                    <li className="mx-3"><Link to="/about">About us</Link></li>
                    <li className="mx-3"><Link to="/contact">Contact us</Link></li>
                    <li className="mx-3">Cart</li>
                    <li className="mx-3"><Link to="/grocery">Grocery🥦</Link></li>
                    <li className="mx-3">{loggedIn}</li>
                    <button onClick={()=>{
                        (btnName ==="Login")? setBtnName("Logout"): setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;