import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import { Link } from "react-router-dom"


export const UserPostList = (props) => {
    // debugger
    const { posts, getPostsByUserId } = useContext(PostContext)



    useEffect(() => {
        getPostsByUserId()
    }, [])

    return (
        <div>
            <h1>My Posts</h1>
            <button onClick={() => {
                props.history.push(`/posts/create`)
            }}>Create a new post
            </button>
            {/* <Link to="/posts/create">Create New Post</Link> */}
            {
                posts.map(p => <Post key={p.id} post={p} props={props} />)
            }
        </div>
    )
}