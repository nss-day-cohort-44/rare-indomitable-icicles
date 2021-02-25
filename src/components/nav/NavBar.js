import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"
import leo from "./leo.png"

export const NavBar = (props) => {


    return (
        <ul className="navbar">
            <div className="navbar__item">
                <img className="navbar__logo" src={leo} />
            </div>
            {/* uncomment this if you want links instead of buttons */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts/create">New Posts</Link>
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
            </li> */}
            <button className="navbutton" onClick={() => {
                props.history.push(`/posts`)
            }}>Posts
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/myposts`)
            }}>My Posts
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/categories`)
            }}>Categories
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/tags`)
            }}>Tags
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/profile`)
            }}>Profiles
            </button>
            {
                (localStorage.getItem("rare_token") !== null) ?
                    <button className="navbutton"
                        onClick={() => {
                            localStorage.removeItem("rare_token")
                            props.history.push({ pathname: "/" })
                        }}
                    >Logout</button> :
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

