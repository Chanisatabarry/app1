import React from 'react'//ถ้าจะเขียนแบบ import React, { useContext } from 'react'; ต้องแก้บรรทัด5ด้วย
import { userContext } from './context'

export default function Content2() {
    let [user,setUser] = React.useContext(userContext) // useContext(userContext);
    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10
    }
    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('Tom Jerry');
    }
    return (
        <div style={contentStyle}>
            {
                (user)
                ? <span>Hello {user}</span> 
                : <span>Please <a href="" onClick={onClickSignin}>Signin</a></span>
            }
        </div>
    )
}
