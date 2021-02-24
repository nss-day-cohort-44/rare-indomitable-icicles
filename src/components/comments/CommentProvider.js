import React, { useState, useEffect } from "react"

export const CommentContext = React.createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])
    const [relatedComments, setRelatedComments] = useState([])
    const [comment, setComment] = useState({})

    const getComments = () => {
        return fetch('http://localhost:8000/comments', {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(res => res.json())
            .then(setComments)
    }

    const addComment = (comments) => {
        return fetch("http://localhost:8000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            },
            body: JSON.stringify(comments)
        })
            .then(getComments)
    }


    const getSingleComment = (id) => {
        return fetch(`http://localhost:8000/comments/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(res => res.json())
            .then(setComment)
    }

    const getCommentsByPostId = (post_id) => {
        return fetch(`http://localhost:8000/comments?post_id=${post_id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_token")}`
            }
        })
            .then(res => res.json())
            .then(setRelatedComments)
    }

    const updateComment = (comment) => {
        return fetch(`http://localhost:8000/comments/${comment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const deleteComment = (comment_id) => {
        return fetch(`http://localhost:8000/comments/${comment_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(getComments)
    }

    return (
        <CommentContext.Provider value={{
            comment, comments, relatedComments, addComment, getComments, getSingleComment, getCommentsByPostId, updateComment, deleteComment,
            setComments, setComment, setRelatedComments
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}