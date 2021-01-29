import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostsList"
import { CommentProvider } from "./comments/CommentProvider"
import { CommentList } from "./comments/CommentList"



export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <CommentProvider>
                    <Route exact path="/posts" render={(props) => <UserPostList {...props} />} />
                    <Route exact path="/comments" render={(props) => <CommentList {...props} />} />
                </CommentProvider>
            </PostProvider>
        </main>
    </>
}
