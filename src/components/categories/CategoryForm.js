import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryProvider"

export const CategoryForm = (props) => {
    const { categories, addCategory, getCategories, updateCategory  } = useContext(CategoryContext)
    const [category, setCategory] = useState({})

    const editMode = props.match.params.hasOwnProperty("id")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCategory = Object.assign({}, category)
        newCategory[event.target.label] = event.target.value
        setCategory(newCategory)
    }

    return(
        <form className="category_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
                <h5>Create a new category</h5>
                <input name="category" type="text" defaultValue="" ref={register({ required: true })} />
                <button className="btn btn-dark" type="submit">Submit</button>
            </div>
        </form>
    )

}