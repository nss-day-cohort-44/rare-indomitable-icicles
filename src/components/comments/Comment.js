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
                .then(() => { props.history.push(`/posts/${postId}`) })
        }
    }
console.log(comment)
    if (localStorage.getItem("rare_token")) {
        return (
            <div className="comment">
                <div>Comment content: {comment.content}</div>
                <div>Author: {comment.author.user.first_name}</div>
                <div>Date Created on: {date.toLocaleString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    timeZone: "America/Chicago",
                })}</div>
                <button className="miscbutton" onClick={() => {
                    confirmDeleteComment()
                }}>
                    Delete
                </button>
                <button className="miscbutton" onClick={() => {
                    props.history.push({
                        pathname: `/comments/edit/${comment.id}`,
                        commentId: comment.id,
                        state: { chosenPost: postId }
                    })
                }}>
                    Edit
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

