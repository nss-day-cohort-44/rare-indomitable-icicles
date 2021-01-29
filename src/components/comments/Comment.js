import React, { useContext, useState, useEffect } from "react"
import { CommentContext } from "./CommentProvider"

const ReadableDate = (date) => {
    let dateToParse = date.split(" ")
    console.log(dateToParse)
    return `${dateToParse[0]} ${dateToParse[1]} ${dateToParse[2]} ${dateToParse[3]}`
}

export const Comment = ({ comment, props }) => {

    if (localStorage.getItem("rare_user_id")) {
        return (
            <div>
                Comment content: {comment.content}
                Relevant post id: {comment.post_id}
                Author id: {comment.author_id}
                Date Created on: { ReadableDate(Date(comment.created_on))}
            </div>
        )
    } else {
        return (
            <div>
                No comments
            </div>
        )
    }
}

