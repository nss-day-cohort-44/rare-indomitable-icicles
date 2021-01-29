import React, { useContext, useState, useEffect } from "react"
import { CommentContext } from "./CommentProvider"



export const Comment = ({ comment, props }) => {



    if (localStorage.getItem("rare_user_id")) {
        return (
            <div>
                label: {comment.content}
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