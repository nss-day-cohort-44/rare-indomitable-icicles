import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import { Link } from "react-router-dom"


<<<<<<< HEAD
export const UserPostList = (props) =>{
    // debugger
=======
export const UserPostList = (props) => {
>>>>>>> main
    const { posts, getPostsByUserId } = useContext(PostContext)
    
    

    useEffect(() => {
        getPostsByUserId()
    }, [])

    return (
        <div>
            <h3>Posts</h3>
            <Link to="/posts/create">Create New Post</Link>
            {
                posts.map(p => <Post key={p.id} post={p} props={props} />)
            }
        </div>
    )
}