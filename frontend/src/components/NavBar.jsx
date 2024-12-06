import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import acebook_logo from "../assets/acebook_logo.png";
import { getMyUsername } from "../services/users.js";
import { useState, useEffect } from "react";
import "./NavBar.css"


export function NavBar() {
    const [username, setUsername] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token")
        getMyUsername(token)
        .then((data) => {
            setUsername(data.username)
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-left">
            <img width="140rem" height="70rem" src={acebook_logo}></img>
            </div>
            {/* The line below will only show the profile link if the username is not an empty string */}
            <div className="navbar-right">
            {username !== "" && (<Link className="nav-link" to={`/profile/${username}`}>Profile</Link>)}
            {username !== "" && (<Link className="nav-link" to="/posts">Feed</Link>)}
            {username !== "" && <LogoutButton/>}
            </div>
        </nav>
        </>
    );
}