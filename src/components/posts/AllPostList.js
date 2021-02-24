import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { AllPost } from "./AllPost"

export const AllPostList = (props) => {
    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(p => <AllPost key={p.id} post={p} props={props} />)
            }
        </div>
    )
}