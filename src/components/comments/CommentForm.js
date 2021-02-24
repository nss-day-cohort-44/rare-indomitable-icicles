import React, { useContext, useRef, useState, useEffect } from "react"
import { PostContext } from "../posts/PostProvider"
import { CommentContext } from "./CommentProvider"


export const CommentForm = (props) => {
    const { addComment, updateComment, comments, getComments } = useContext(CommentContext)
    const { getSinglePost, post } = useContext(PostContext)

    const [ comment, setComment ] = useState({})

    const editMode = props.match.params.hasOwnProperty("commentId")

    const chosenPost = post

    const post_id = parseInt(chosenPost.id)
    const author_id = parseInt(localStorage.getItem("rare_token"))

    const handleControlledInputChange = (event) => {
        const newComment = Object.assign({}, comment)
        newComment["content"] = event.target.value
        setComment(newComment)
    }

    const getCommentInEditMode = () => {
        if (editMode) {
            const commentId = parseInt(props.match.params.commentId)
            const selectedComment = comments.find(c => c.id === commentId) || {}
            setComment(selectedComment)
        }
    }
    
    useEffect(() =>{
        getComments()
        getSinglePost()
    }, [])
    
    useEffect(() =>{
        getCommentInEditMode()
    }, [comments])
    debugger
    const constructNewComment = () => {
        if (editMode) {
            updateComment({
                id: comment.id,
                post_id: comment.post_id,
                author_id,
                content: comment.content,
                created_on: comment.created_on   
            })
            .then(() => props.history.push(`/comments`))
        } else {
            addComment({
                post_id,
                author_id,
                content: comment.content,
                created_on: Date.now()
            })
            .then(() => props.history.push(`/comments`))
        }
    } 

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">{editMode ? "Update Comment" : "New Comment"}</h2>
                        
            <fieldset>
                <div className="form-group">
                    <input type="text" id="content" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="some notes..." 
                        defaultValue={comment.content}
                        onChange={handleControlledInputChange}    
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewComment()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Comment"}
            </button>
        </form>
    )
}