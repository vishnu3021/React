import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MoviesData(){
    const movies = [
        {
            id: "1",
             name: "Thor4",
            year: "2022"
        
        },
        {
            id:"2",
            name: "Ben10",
            year: "2022"  
        },
    ];
    const {id} = useParams()
   const movie = movies.find((a,b)=>{
    return a.id === id
   })
    return(

        <div>
            <h1>{id}</h1>
          {/* <p>{movie.name}</p> */}
        </div>

    )
}
export default MoviesData;