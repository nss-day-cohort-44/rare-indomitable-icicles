import React, { useContext, useEffect, useState } from 'react'
import {TagContext} from "./TagProvider"
import {Tag} from "./TagDetails"

export const TagList = (props) => {

const { deleteTag, getTags, addTag, tags } = useContext(TagContext)

useEffect(() => {
    console.log("HERE")
    getTags()
}, [])

return (     
    <div> 
    <h3>Tags</h3>
    {
        tags.map(tagObj => <Tag key={tagObj.id} tag={tagObj} props={props}/> )
    }
    </div> 
)
}

