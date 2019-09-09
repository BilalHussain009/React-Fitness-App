import React from 'react';
import {connect} from 'react-redux';

import configureStore from '../../store/configureStore';
const store = configureStore();
import {startAddChoices} from '../../actions/questions';
class question1 extends React.Component{
 question1a=(e,props)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Lose Weight'));
    this.props.history.push('/question2');
};
question1b=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Get Toned'));
    this.props.history.push('/question2');
};
 question1c=(e)=>{
    e.preventDefault();
    store.dispatch(startAddChoices('Build Muscle'));
    this.props.history.push('/question2');
};
render(){
    return(
<div className='questionPage'>
    <div className='central-box'>
        <form>
            <h1 className='top-heading'>
            {this.props.questions[0][0][1]}
            </h1>
            <h2 className='below-heading'>
            ({this.props.questions[0][0][2]})
            </h2>
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={this.question1a} className='btn' >
{this.props.questions[0][0][3]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'   onClick={this.question1b}>
  {this.props.questions[0][0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={this.question1c}>
  {this.props.questions[0][0][5]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>

            </div>
            
           
        </form>
        </div>
        
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