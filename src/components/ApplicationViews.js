import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"
import { UserPostList } from "./posts/UserPostsList"
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
            
            <PostProvider>
                <Route exact path="/posts" render={(props) => <UserPostList {...props} />}/>
                <Route exact path="/allposts" render={(props) => <AllPostList {...props}/>}/>
                <Route 
                path="/posts/:postId(\d+)"
                render={(props) => <PostDetail {...props}/>}/>
            </PostProvider>
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
