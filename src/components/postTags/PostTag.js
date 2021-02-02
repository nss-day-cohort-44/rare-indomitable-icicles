import React, { useContext, useState } from "react"
import {PostTagContext} from "./PostTagProvider"

export const PostTag = ({postTags, props}) =>{
    const {deletePostTag, setTagDeleted, tagDeleted} = useContext(PostTagContext)
    return(
            <div>Label: {postTags.tag.label}
            <button onClick={()=>{deletePostTag(postTags.id, postTags.post_id); setTagDeleted(tagDeleted + 1)}}>Delete Tag From Post</button>
            </div>
    )
}