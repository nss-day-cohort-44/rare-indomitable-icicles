import React, { useContext } from "react"
import { TagContext } from "./TagProvider"
import './Tag.css'


export const Tag = ({ tag, props }) => {

    const { deleteTag } = useContext(TagContext)

    const confirmDelete = () => {
        const d = window.confirm("Are you sure you would like to delete this tag?")
        if (d === true) {
            deleteTag(tag.id).then(() => { props.history.push("/tags") })
        }
    }

    if (localStorage.getItem("rare_token")) {
        return (
            <section className="tag">
                <h3>{tag.label}</h3>
                <div className="tagbuttons">
                    <button className="miscbutton" onClick={() => { confirmDelete() }}>Delete</button>

                    <button className="miscbutton" onClick={() => { props.history.push({ pathname: `/tags/edit/${tag.id}`, tagId: tag.id }) }}> Edit </button>
                </div>
            </section>
        )
    } else {
        return (
            <div>
                No tags
            </div>
        )
    }
}



