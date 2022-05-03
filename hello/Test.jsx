import React from 'react';
import TestTwo from './TestTwo';
import TestOne from './TestOne';
class Test extends React.Component{
     state={
         greet:'Welcome',
         name:'Mr'
           }
     changename = () =>{
         this.setState({name:"Vignesh"})
     }
     render(){
         return(
             <div>
                 <p>{this.state.greet} {this.state.name} !!!</p>
     <button type="button" onClick={this.changename}>Click Me</button>
    <TestOne />
    <TestTwo />
    </div>
        );
    }
}

export default Test;