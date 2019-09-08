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
       
        
            
            <div className='questionPage'>
    <div className='central-box'>
    <form>
             <h1 className='top-heading'>
             {this.props.questions[1][0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={this.question2a} className='btn' href='#'>
{this.props.questions[1][0][2]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question2b}>
  {this.props.questions[1][0][3]}
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