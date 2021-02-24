import React, { useContext, useState, useEffect } from "react"
import { CommentContext } from "./CommentProvider"
import './Comment.css'

export const Comment = ({ comment, props }) => {

    const { deleteComment } = useContext(CommentContext)
    const postId = parseInt(comment.post_id)
    const date = new Date(comment.created_on)

    const confirmDeleteComment = () => {
        const prompt = window.confirm("Are you sure you want to delete this comment?")
        if (prompt === true) {
            deleteComment(comment.id)
                .then(() => { props.history.push(`/comments`) })
        }
    }

    if (localStorage.getItem("rare_token")) {
        return (
            <div className="comment">
                <div>Comment content: {comment.content}</div>
                <div>Relevant post id: {comment.post_id}</div>
                <div>Author: {comment.username}</div>
                <div>Date Created on: {date.toLocaleString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    timeZone: "America/Chicago",
                })}</div>
                <button onClick={() => {
                    confirmDeleteComment()
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

