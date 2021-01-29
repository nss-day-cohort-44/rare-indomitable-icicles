import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostsList"
import { TagForm } from "./Tags/TagForm"
import { TagList } from "./Tags/TagList"
import { TagProvider } from "./Tags/TagProvider"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        <TagProvider>
            <PostProvider>
                <Route exact path="/posts" render={(props) => <UserPostList {...props} />}/>
                <Route exact path="/tags" render={ props => <> <TagList {...props} /> <TagForm {...props} />
              </>
            } />
            </PostProvider>
        </TagProvider>
        </main>
    </>
}
