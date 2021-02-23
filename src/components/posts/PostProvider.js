import React, { useState, useEffect, useContext } from "react"
import { PostTagContext } from "../postTags/PostTagProvider"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({ category: {} })
    const [postId, setPostId] = useState(0)
    const { addPostTag } = useContext(PostTagContext)


    const getPosts = () => {
        return fetch("http://localhost:8000/posts", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })

            .then(res => res.json())
            .then(setPosts)
    }

<<<<<<< HEAD
    const getPostsByUserId = () =>{
        
        return fetch(`http://localhost:8000/posts?sortby=user`, {
=======
    const getPostsByUserId = (userId) => {
        userId = localStorage.getItem("rare_token_id")
        return fetch(`http://localhost:8000/posts?user_id=${userId}`, {
>>>>>>> main
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
<<<<<<< HEAD
            .then(response => response.json())
=======
            .then(res => res.json())
>>>>>>> main
            .then(setPosts)
    }

    const getSinglePost = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(res => res.json())
            .then(setPost)
    }

    const updatePost = (post) => {
        return fetch(`http://localhost:8000/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const addPost = (post, tags) => {
        return fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            .then((res) => {
                addPostTag({
                    post_id: res.id,
                    tag_array: tags
                })
                console.log(tags)
            })
            .then(getPosts)
    }

    const deletePost = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            },
        })
            .then(getPosts)
    }

    return (
        <PostContext.Provider value={{
            posts, addPost, getPosts, updatePost, deletePost, getSinglePost, getPostsByUserId, post, setPost, postId, setPostId
        }}>
            {props.children}
        </PostContext.Provider>
    )
}