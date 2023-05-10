import React from 'react'; 
import './App.css';
import Mail from './Mail.png'; 
import  Card from './Name.png';
import City from './City.png';  


function UserList (props) {
    return (
        <div className='root'>
            <div className='under-root'>
                <div> <img src={Card} className='img' /> </div>
                <div><h3> Name's candidate : {props.actor.name}</h3> </div>
                 </div>
            <div className='under-root'> 
            <div> <img src={Mail} className='img'/> </div>
            <div><h3> Mail's candidate : {props.actor.email} </h3></div>
                 </div>
            <div className='under-root'> 
            <div> <img src={City} className='img'/> </div>
            <div><h3> City's candidate : {props.actor.address.city} </h3></div>
                </div>
        </div>
    )
}

export default UserList; 