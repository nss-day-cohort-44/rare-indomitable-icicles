import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = (props) => {


    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} />
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/myposts">My Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tags">Tag Management</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profiles</Link>
            </li>
            {
                (localStorage.getItem("rare_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rare_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

