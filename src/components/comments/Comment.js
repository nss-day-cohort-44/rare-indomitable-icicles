import React, { useContext, useState, useEffect } from "react"
import { CommentContext } from "./CommentProvider"

export const Comment = ({ comment, props }) => {

    const { deleteComment } = useContext(CommentContext)
    const postId = parseInt(comment.post_id)
    const date = new Date(comment.created_on)    

    if (localStorage.getItem("rare_user_id")) {
        return (
            <div>
                Comment content: {comment.content}
                Relevant post id: {comment.post_id}
                Author id: {comment.author_id}
                Date Created on: {date.toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                timeZone: "America/Chicago",
            })}
                <button onClick={() => {
                    deleteComment(comment.id, comment.post_id)
                        .then(() => {
                            props.history.push(`/posts/${postId}`)
                        })
                }}>
                    Delete Comment
                </button>
                <button onClick={() => {
                    props.history.push({
                        pathname: `/comments/edit/${comment.id}`,
                        commentId: comment.id,
                        state: { chosenPost: postId }
                    })
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

