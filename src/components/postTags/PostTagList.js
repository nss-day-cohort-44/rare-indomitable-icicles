import React, {useContext, useEffect, useState} from "react"
import {PostTagContext} from "./PostTagProvider"
import {PostTag} from "./PostTag"
import { PostContext } from "../posts/PostProvider"

export const PostTagList = (props) =>{
    const {postTags, getPostTagsByPostId, tagDeleted} = useContext(PostTagContext)

    useEffect(() =>{
        getPostTagsByPostId(parseInt(props.match.params.postId))
    }, [tagDeleted])

    return(
        <div>
            <h3>Selected Post's Tags</h3>
            {postTags && (postTags.map(pt => <PostTag key={pt.id} postTags={pt} props={props}/>))}
            {postTags.length === 0 ? "Sorry This Post Has No Tags" : ""}
        </div>
    )
}