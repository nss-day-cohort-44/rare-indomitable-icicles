import React, { useContext, useState, useEffect } from "react"
import { TagContext } from "./TagProvider"



export const Tag = ({tag, props}) => {
    
    

    if(localStorage.getItem("rare_user_id")){
        return(
            <div>
               label: {tag.label}
           </div>
             )
    }else{
       return(
           <div>
               No tags
           </div>
       )
    }
}
    


