import React from 'react';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();
import {startAddChoices} from '../../actions/questions';
class question1 extends React.Component{
 question2a=(e,props)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Male'));
    this.props.history.push('/question3');
};
question2b=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Female'));
    this.props.history.push('/question3');
};

render(){
    return(
<div>
        <form>
            <h1>
            {this.props.questions[1][0][1]}
            </h1>
            
            <button onClick={this.question2a}>
            {this.props.questions[1][0][2]}
            </button>
            <button onClick={this.question2b}>
            {this.props.questions[1][0][3]}
            </button>
            
        </form>
    </div>
    )
}

    
};
const mapStateToProps=(state)=>(
    {
        questions:state.questions
    }
);
export default connect(mapStateToProps)(question1);