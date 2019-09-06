import React from 'react';
import {connect} from 'react-redux';

class questionPage extends React.Component{
    state={
        questions:this.props.questions[0],
        page:0
    }
    onChange=(ab)=>{
        
        this.setState(()=>({page:this.state.page+1,
            questions:this.props.questions[this.state.page+1]
        }));
    }
    question1a=()=>{

    }
    question1b=()=>{

    }
    question1c=()=>{

    }
    question2a=()=>{

    }
    question2b=()=>{

    }
    question3a=()=>{

    }
    question3b=()=>{

    }
    question3c=()=>{

    }
    question3d=()=>{

    }
    question4a=()=>{

    }
    question4b=()=>{

    }
    question4c=()=>{

    }
    question5a=()=>{

    }
    question5b=()=>{

    }
    question5c=()=>{

    }
    
    render(){
        return(
        <div>
            {/* <h1>{(this.state.questions[0][1])}</h1> */}
            {this.state.page==0?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==0?<h2>{this.state.questions[0][2]}</h2>:<h1></h1>}
            {this.state.page==0?<button onClick={() => { this.onChange();this.question1a ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==0?<button onClick={() => { this.onChange();this.question1b;}}>{this.state.questions[0][4]}</button>:<h1></h1>}
            {this.state.page==0?<button onClick={() => { this.onChange();this.question1c ;}}>{this.state.questions[0][5]}</button>:<h1></h1>}
            {this.state.page==1?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==1?<button onClick={() => { this.onChange();this.question2a ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==1?<button onClick={() => { this.onChange();this.question2b ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==2?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==2?<button onClick={() => { this.onChange();this.question3a ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==2?<button onClick={() => { this.onChange();this.question3b ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==2?<button onClick={() => { this.onChange();this.question3d ;}}>{this.state.questions[0][5]}</button>:<h1></h1>}
            {this.state.page==3?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4a ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4b ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4c ;}}>{this.state.questions[0][4]}</button>:<h1></h1>}
            {this.state.page==4?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a ;}}>{this.state.questions[0][4]}</button>:<h1></h1>}
            
            {/* <button onClick={this.onChange}>{this.state.questions[0][2]}</button> */}
            {/* <button>{this.state.questions[0][4]}</button>
            <button>{this.state.questions[0][5]}</button> */}
            
            
        </div>
        )
    }
    
};
const mapStateToProps=(state)=>(
    {
        questions:state.questions
    }
);
export default connect(mapStateToProps)(questionPage);