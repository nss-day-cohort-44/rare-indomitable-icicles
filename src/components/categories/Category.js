import React, { useContext } from "react"
import { CategoryContext } from "../categories/CategoryProvider"
import { useHistory } from "react-router-dom"
import './Category.css'

// component responsible for rendering a single category

export const Category = ({ category }) => {
    const { removeCategory } = useContext(CategoryContext)
    const history = useHistory()

    const confirmDelete = (id) => {
        const d = window.confirm("Would you like to delete this?")
        if (d === true) {
            removeCategory(id)
        }
    }

    return (<section className="category">
        <h3 className="category__label">{category.label}</h3>
        <div className="tagbuttons">
            <button className="miscbutton" onClick={
                () => {
                    confirmDelete(category.id)
                }
            }>
                Delete
            </button>
            <button className="miscbutton" onClick={() => {
                history.push(`/categories/edit/${category.id}`)
            }}>Edit
            </button>
        </div>
    </section>
    )
}