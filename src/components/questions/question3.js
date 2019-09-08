import React from 'react';
import {connect} from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();
import {startAddChoices} from '../../actions/questions';
class question1 extends React.Component{
 question3a=(e,props)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Hardly'));
    this.props.history.push('/question4');
};
question3b=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('SomeTimes'));
    this.props.history.push('/question4');
};
question3c=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('2-3 TIMES A WEEK'));
    this.props.history.push('/question4');
};
question3d=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('OVER 4 TIMES A WEEK'));
    this.props.history.push('/question4');
};
render(){
    return(
<div>
        <form>
            <h1>
            {this.props.questions[2][0][1]}
            </h1>
            
            <button onClick={this.question3a}>
            {this.props.questions[2][0][2]}
            </button>
            <button onClick={this.question3b}>
            {this.props.questions[2][0][3]}
            </button>
            <button onClick={this.question3c}>
            {this.props.questions[2][0][4]}
            </button>
            <button onClick={this.question3d}>
            {this.props.questions[2][0][5]}
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