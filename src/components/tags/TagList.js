import React, { useContext, useEffect, useState } from 'react'
import {TagContext} from "./TagProvider"
import {Tag} from "./TagDetails"
import { Link, useHistory } from "react-router-dom"


export const TagList = (props) => {

const { deleteTag, getTags, addTag, tags } = useContext(TagContext)

useEffect(() => {
    console.log("HERE")
    getTags()
}, [])

const sorted = tags.sort((a, b) => {
    var tagA = a.label.toUpperCase()
    var tagB = b.label.toUpperCase()
if (tagA > tagB) {
    return 1
}
if (tagA < tagB) {
    return -1
}
if (tagA = tagB) {
    return 0
}
})

return (     
    <>
        
            <div className="row">
            <h1>Tags</h1>
                <button onClick={() => {
                    props.history.push(`/tags/create`)
                }}>Create a new tag
                </button>
                <div className="column">
                    {sorted.map(tag => {
                            return <Tag key={tag.id} 
                            tag={tag} props={props} 
                        
                            />
                    })
                    }
                </div>
            </div>
        </>
)
}
