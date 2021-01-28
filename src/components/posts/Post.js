import React, { useContext, useState } from "react"
import { PostContext } from "./PostProvider"


export const Post = ({post, props}) =>{
    // when user provider is provided, if statement will need to be altered to user.id = localstorage.getItem(rare_user_id)
    if(localStorage.getItem("rare_user_id")){
        return(
            <div>
                userid: {post.user_id}
                category_id: {post.category_id}
                title: {post.title}
                publication_date: {post.publication_date}
                image_url: {post.image_url}
                content: {post.content}
                approved: {post.approved}
            </div>
        )
    }else{
        return(
            <div>
                U havent made any posts
            </div>
        )
    }
}