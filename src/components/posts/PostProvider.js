import React, {useState, useEffect } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) =>{
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({category : {}})


    const  getPosts = () =>{
        return fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then(setPosts)
    }

    const getPostsByUserId = (userId) =>{
        userId = localStorage.getItem("rare_user_id")
        return fetch(`http://localhost:8088/posts?user_id=${userId}`)
            .then(res => res.json())
            .then(setPosts)
    }

    const getSinglePost = (id) =>{
        return fetch(`http://localhost:8088/posts/${id}`)
            .then(res => res.json())
            .then(setPost)
    }

    const updatePost = (post) =>{
        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(getPosts)
    }

    const addPost = (post) => {
        return fetch("localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(getPosts)
    }

    const deletePost = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    return(
        <PostContext.Provider value={{
            posts, addPost, getPosts, updatePost, deletePost, getSinglePost, getPostsByUserId, post, setPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}