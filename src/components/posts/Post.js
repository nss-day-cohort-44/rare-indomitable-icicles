import React, { useContext, useState } from "react"
import { PostContext } from "./PostProvider"
import { Link } from "react-router-dom"
import './Post.css'
import { HumanDate } from "../utils/HumanDate"


export const Post = ({post, props}) =>{
    // when user provider is provided, if statement will need to be altered to user.id = localstorage.getItem(rare_token)
    // debugger
    

    if(localStorage.getItem("rare_token")){
        return(
            
            <div className="posts">
                <Link to={{
                    pathname: `/posts/${post.id}`,
                    state: { chosenPost: post }
                }}>title: {post.title}</Link>
                <div>category: {post.category.label}</div>
                <div>author: {post.rare_user.user.first_name}</div>
                {/* <Link to={{
                    pathname: `/posts/add_tags/${post.id}`,
                    state: { chosenPost: post }
                }}>Add Tags</Link>
                <Link to={{
                    pathname: `/posts/manage_tags/${post.id}`,
                    state: { chosenPost: post }
                }}>Manage Tags</Link> */}
            </div>
        )
    } else {
        return (
            <div>
                U havent made any posts
            </div>
        )
    }
}