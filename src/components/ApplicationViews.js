import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostsList"
import { TagForm } from "./Tags/TagForm"
import { TagList } from "./Tags/TagList"
import { TagProvider } from "./Tags/TagProvider"

import { AllPostList } from "./posts/AllPostList"
import { PostDetail } from "./posts/PostDetail"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm} from "./categories/CategoryForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <TagProvider>
            <PostProvider>
                <Route exact path="/posts" render={(props) => <UserPostList {...props} />}/>
                <Route exact path="/allposts" render={(props) => <AllPostList {...props}/>}/>
                <Route exact path="/tags" render={ props => <> <TagList {...props} /> <TagForm {...props} /></>} />
                <Route exact path="/tags/edit/:id(\d+)" render={ props => <> <TagForm {...props} /></>} />
                <Route 
                path="/posts/:postId(\d+)"
                render={(props) => <PostDetail {...props}/>}/>
            </PostProvider>
            </TagProvider>
            <CategoryProvider>
                <Route exact path="/categories" render={(props) => <CategoryList {...props} />}/>
                <Route exact path="/categories/create" render={
                            props => <CategoryForm {...props} />
                        } />
                        <Route path="/categories/edit/:categoryId(\d+)" render={
                            props => <CategoryForm {...props} />
                        } />
            </CategoryProvider>

        </main>
    </>
}
