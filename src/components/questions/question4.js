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

    
    <div className='questionPage'>
    <div className='central-box'>
    <form>
             <h1 className='top-heading'>
             {this.props.questions[3][0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={this.question4a} className='btn' href='#'>
  {this.props.questions[3][0][2]}   <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question4b}>
  {this.props.questions[3][0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn' href='#'  onClick={this.question4c}>
  {this.props.questions[3][0][4]}
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