import React from 'react';
function Header(){
    return (
        <div style={style.head}>
            <ul style={{display:'flex', gap:'60px'}}>
                <li>Home</li>
                <li>Course</li>
                <li>Enroll</li>
                <li>Login</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}
const style={
    head:{
        
        backgroundColor:'red',
        padding:'20px',
    }
}
export default Header;