import React, { useContext } from "react"
import { CategoryContext } from "../categories/CategoryProvider"
import { useHistory } from "react-router-dom"

// component responsible for rendering a single category

export const Category = ({ category }) => {
    const { removeCategory } = useContext(CategoryContext)
    const history = useHistory()

    return (<section className="category">
        <div className="category__label">{category.label}</div>
        <button onClick={
                () => {
                    removeCategory(category.id)  // you can also use props.match.params.animalId
                        .then(() => {
                            history.push("/categories")
                        })
                }
            }>
                Delete
            </button>
            <button onClick={() => {
                history.push(`/categories/edit/${category.id}`)
            }}>Edit
            </button>
    </section>
    )
}