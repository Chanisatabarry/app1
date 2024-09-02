import React from 'react'
import {userContext}from './context'
// import { render } from '@testing-library/react'

export default class Header2 extends React.Component{
    static contextType = userContext
    
    render(){
        let[user,setUser]=this.context
        const headerStyle={
            backgroundColor:'#cee',
            textAlign:'center',
            padding:5
        }
        const onClickSignout = (event)=>{
            event.preventDefault()
            setUser('')//ปล่อยว่างไว้
        }
        const onClickSignin = (event)=>{
            event.preventDefault()
            setUser('Tom Jerry')
        }
    return(
        <div style={headerStyle}>
            <a href="">Home</a>&nbsp;-&nbsp;
            <a href="">Product</a>&nbsp;-&nbsp;
            <a href="">Contact Us</a>&nbsp;-&nbsp;&nbsp;
    {
        (user)
        ?<span>[{user}&nbsp;:&nbsp;<a href=""onClick={onClickSignout}>Signout</a>]</span> //ถ้าuserมีมาจริง ให้แสดงว่าuserนั้นชื่ออะไร
        :<span>[<a href=""onClick={onClickSignin}>Signin</a>]</span>
    }
        </div>
    )
    }
}
