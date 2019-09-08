import React from 'react';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();
import {startAddChoices} from '../../actions/questions';
class question1 extends React.Component{
 question4a=(e,props)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('A LITTLE TIRED"'));
    this.props.history.push('/question5');
};
question4b=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('EASY'));
    this.props.history.push('/question5');
};
 question4c=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('I CAN RUN UP THERE'));
    this.props.history.push('/question5');
};
render(){
    return(
<div>
        <form>
            <h1>
            {this.props.questions[3][0][1]}
            </h1>
            
            <button onClick={this.question4a}>
            {this.props.questions[3][0][2]}
            </button>
            <button onClick={this.question4b}>
            {this.props.questions[3][0][3]}
            </button>
            <button onClick={this.question4c}>
            {this.props.questions[3][0][4]}
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