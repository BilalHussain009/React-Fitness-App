import React from 'react';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();
import {startAddChoices} from '../../actions/questions';
class question5 extends React.Component{
 question5a=(e,props)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('LESS THEN 10'));
    this.props.history.push('/allChallenges');
};
question5b=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('21-30'));
    this.props.history.push('/allChallenges');
};
question5c=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('OVER 30'));
    this.props.history.push('/allChallenges');
};
render(){
    return(
<div>
        <form>
            <h1>
            {this.props.questions[4][0][1]}
            </h1>
            <button onClick={this.question5a}>
            {this.props.questions[4][0][2]}
            </button>
            <button onClick={this.question5b}>
            {this.props.questions[4][0][3]}
            </button>
            <button onClick={this.question5c}>
            {this.props.questions[4][0][4]}
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
export default connect(mapStateToProps)(question5);