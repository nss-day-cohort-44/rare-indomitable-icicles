import React, {useContext, useEffect, useState} from "react"
import {PostContext} from "./PostProvider"
import {AllPost} from "./AllPost"
import { Link } from "react-router-dom"


export const PostDetail = (props) =>{
    const { posts, getSinglePost, post, setPost, deletePost } = useContext(PostContext)
    console.log(props)

    useEffect(() =>{
        const postId = parseInt(props.match.params.postId)
        getSinglePost(postId)
        .then(setPost(props.location.state.chosenPost))
    }, [])
    
    console.log(post)
    return (
        <>
        <div>{post.title}</div>
        <div>{post.publication_date}</div>
        <div>{post.image_url}</div>
        <div>{post.content}</div>
        <div>{post.category.label}</div>
        <div>{post.username}</div>
        { parseInt(localStorage.getItem("rare_user_id")) === post.user_id ? <><button onClick={()=>{deletePost(post.id).then(() => {props.history.push("/posts")})}}>Delete Post</button> <Link>Edit Post</Link> </>:<> {""}</>
    }
    <Link>View Comments</Link>

        </>
    )
}