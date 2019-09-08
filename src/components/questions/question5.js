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

        
    <div className='questionPage'>
    <div className='central-box'>
    <form>
             <h1 className='top-heading'>
             {this.props.questions[4][0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={this.question5a} className='btn' href='#'>
  {this.props.questions[4][0][2]}  <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question5b}>
  {this.props.questions[4][0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question5c}>
  {this.props.questions[4][0][4]}
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
export default connect(mapStateToProps)(question5);