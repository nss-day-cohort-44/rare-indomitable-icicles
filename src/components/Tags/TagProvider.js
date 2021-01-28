import React, { useState } from 'react'

export const TagContext = React.createContext()

export const TagProvider = (props) => {

    const [tags, setTags] = useState([])

    const getTags = () => {
		return fetch("http://localhost:8088/tags")
		.then(res => res.json())
		.then(setTags);
	}

	const addTag = tag => {
		return fetch("http://localhost:8088/tags", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tag)
		})
		.then(getTags)
    }
    
    const DeleteTag = tag => {
        return fetch(`http://localhost:8088/tags/${tag}`, {
          method: "DELETE"
        })
        .then(res => res.json())
           .then(GetTags)  
         //.then((data) => console.log("HERES THE DELETE", data))
      }

      const EditTag = tag => {
        return fetch(`http://localhost:8088/tags/${tag.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(log)
        })
          .then(GetTags)
      }

	return <TagContext.Provider value = {{
		tags, getTags, addTag, DeleteTag, EditTag 
	}}>
		{props.children}
	</TagContext.Provider>
}

