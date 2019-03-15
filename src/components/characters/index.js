import React from 'react';

export default function Characters(props){
    return(
        <div onClick={()=> props.handleClick(props.name)} className='characterContainer w3-container w3-center w3-animate-opacity w3-hover-opacity'>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            
        </div>
    );
}