import React, {useContext, useEffect} from "react"
import {PostContext} from "./PostProvider"
import {Post} from "./Post"

export const UserPostList = (props) =>{
    const { posts, getPosts } = useContext(PostContext)

    useEffect(() =>{
        getPosts()
    }, [])

    return (
        <div>
            <h3>Posts</h3>
            {
                posts.map(p => <Post key={p.id} post={p} props={props}/>)
            }
        </div>
    )
}