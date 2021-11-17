import React from 'react'


const ChildComponent = (props) => {    
    console.log(props)
    return <p>{props.name}</p>; 
  };



  export default ChildComponent