import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostsList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            
            <PostProvider>
                <Route exact path="/posts" render={(props) => <UserPostList {...props} />}/>
            </PostProvider>
            <CategoryProvider>
            <Route exact path="/categories" render={(props) => <CategoryList {...props} />}/>
            </CategoryProvider>

        </main>
    </>
}
