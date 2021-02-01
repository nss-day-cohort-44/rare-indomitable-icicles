import React, { useContext, useState, useEffect } from "react"
import { CommentContext } from "./CommentProvider"

const ReadableDate = (date) => {
    let dateToParse = date.split(" ")
    console.log(dateToParse)
    return `${dateToParse[0]} ${dateToParse[1]} ${dateToParse[2]} ${dateToParse[3]}`
}

export const Comment = ({ comment, props }) => {

    const { deleteComment } = useContext(CommentContext)
    const postId = parseInt(comment.post_id)

    if (localStorage.getItem("rare_user_id")) {
        return (
            <div>
                Comment content: {comment.content}
                Relevant post id: {comment.post_id}
                Author id: {comment.author_id}
                Date Created on: { ReadableDate(Date(comment.created_on))}
                <button onClick={() => {
                        deleteComment(comment.id, comment.post_id)
                        .then(() => {
                            props.history.push(`/posts/${postId}`)
                        })
                    }}>
                    Delete Comment
                </button>
                <button onClick={() => {
                        props.history.push({ pathname: `/comments/edit/${comment.id}`, commentId: comment.id })
                    }}>
                    Edit Comment
                </button>
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

