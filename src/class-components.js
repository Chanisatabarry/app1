import React,{Component} from 'react'

export default class Calendar extends Component{
getDate(){
    const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'june', 'july', 'August', 'September', 'October', 'November','December']
    const date = new Date()
    const weekDay = dayNames[date.getDay()]
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()//พ.ศ.
    return` ${weekDay} ${day} ${month} ${year}`// `ต้องใช้ตัวนี้เท่านั้น Alt+96`
}    
render(){
    return <div>{this.getDate()}</div>
}
}