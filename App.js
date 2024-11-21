import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/logo.png' ;

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search`
 * - RestaurantContainer
 *   - RestaurantCard
 * Footer
 * - Copywright
 * - Links
 */
const Header = ()  =>{
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>

            </div>

        </div>
    )

}

const Body = ()  =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                
            </div>

        </div>
    )
}


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);