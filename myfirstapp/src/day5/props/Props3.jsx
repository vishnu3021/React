import React from 'react'
function Named(props){
return(
    // we have two ways to implement there

<div>
{/* 1) 1st way */}
    {/* <p>{props.children}</p> */}
    {/* 2nd way */}
    {props.children.map((a,b,c)=>{
        return(
            <ul>
                <li>{a}</li>
            </ul>
        )
    })}

</div>
)
}
export default Named;