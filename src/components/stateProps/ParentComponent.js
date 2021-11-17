import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {    
    render() {    
        return (    
            <div>
                <ChildComponent name="First Child" lastName="Test"/>   
                <ChildComponent name="First Child11" lastName="Te11st"/>   
            </div>     
            
        );  
    }
  }


  export default ParentComponent