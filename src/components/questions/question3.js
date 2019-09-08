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

    <div className='questionPage'>
    <div className='central-box'>
    <form>
             <h1 className='top-heading'>
             {this.props.questions[2][0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={this.question3a} className='btn' href='#'>
{this.props.questions[2][0][2]}   <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question3b}>
  {this.props.questions[2][0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question3c}>
  {this.props.questions[2][0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question3d}>
  {this.props.questions[2][0][5]}
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