import React from 'react';
import {connect} from 'react-redux';
import {startAddChoices} from '../actions/questions';
import configureStore from '../store/configureStore';
import ProgressBar from './ProgressBar';
import uuid from 'uuid';
const store = configureStore();
import { createHashHistory } from 'history'
const history = createHashHistory()

import {CSSTransition,TransitionGroup} from 'react-transition-group';

export class QuestionPage extends React.Component{
    state={
        questions:this.props.questions[0],
        page:0,
        progress:0
    }
    onChange=(ab)=>{
        
        this.setState((prevState)=>({page:this.state.page+1,
            questions:this.props.questions[this.state.page+1],
            progress:prevState.progress+20
        }));
    }
    question1a=()=>{
        store.dispatch(startAddChoices('Lose Weight'));
    }
    question1b=()=>{
      store.dispatch(startAddChoices('Get Toned'));
    }
    question1c=()=>{
      store.dispatch(startAddChoices('Build Muscle'));
    }
    question2a=()=>{
      store.dispatch(startAddChoices('Male'));

    }
    question2b=()=>{
      store.dispatch(startAddChoices('Female'));

    }
    question3a=()=>{
      store.dispatch(startAddChoices('Harldy'));

    }
    question3b=()=>{
      store.dispatch(startAddChoices('2-3 Times A week'));

    }
    question3c=()=>{
      store.dispatch(startAddChoices('Build Muscle'));

    }
    question3d=()=>{
      store.dispatch(startAddChoices('Over Four Times a week'));

    }
    question4a=()=>{
      store.dispatch(startAddChoices('A little Tired'));

    }
    question4b=()=>{
      store.dispatch(startAddChoices('Easy'));

    }
    question4c=()=>{
      store.dispatch(startAddChoices('I can Run Up there'));

    }
    question5a=()=>{
      this.props.history.push('/allChallenges');


    }
    question5b=()=>{
      this.props.history.push('/allChallenges');

    }
    question5c=()=>{
      this.props.history.push('/allChallenges');

    }
    
    render(){
        return(
          <TransitionGroup >
                <CSSTransition
                    key={uuid.v4()}
                    timeout={1000}
                    classNames="move"
                >
        <div>
          <div className="progressbar">

        <ProgressBar progress={this.state.progress}/>
        </div>
            {/* <h1>{(this.state.questions[0][1])}</h1> */}
            
            {this.state.page==0?<div className='questionPage'>
    <div className='central-box'>
    <h1 className='top-heading'>
    {this.state.questions[0][1]}
            </h1>
            <h2 className='below-heading'>
            ({this.state.questions[0][2]}
            </h2>
            <div className='main-cont'>
                <div className='btn-cont'>
  <a href="\\" onClick={() => { this.onChange();this.question1a() ;}} className='btn' >
{this.state.questions[0][3]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'   onClick={this.question1b}>
  {this.state.questions[0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={this.question1c}>
  {this.state.questions[0][5]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>

            </div>
       </div>
       </div> :<h5></h5>}
            {this.state.page==1?<div className='questionPage'>
    <div className='central-box'>
    <h1 className='top-heading'>
    {this.state.questions[0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a  onClick={() => { this.onChange();this.question2a() ;}}className='btn' >
{this.state.questions[0][2]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'   onClick={() => { this.onChange();this.question2b() ;}}>
  {this.state.questions[0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>


            </div>
       </div>
       </div> :<h5></h5>}
       {this.state.page==2?<div className='questionPage'>
    <div className='central-box'>
    <h1 className='top-heading'>
    {this.state.questions[0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={() => { this.onChange();this.question3a() ;}} className='btn' >
{this.state.questions[0][2]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question3b() ;}}>
  {this.state.questions[0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question3c() ;}}>
  {this.state.questions[0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question3c() ;}}>
  {this.state.questions[0][5]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>


            </div>
       </div>
       </div> :<h5></h5>}
       {this.state.page==3?<div className='questionPage'>
    <div className='central-box'>
    <h1 className='top-heading'>
    {this.state.questions[0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={() => { this.onChange();this.question4a() ;}} className='btn' >
{this.state.questions[0][2]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question4b() ;}}>
  {this.state.questions[0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question4c() ;}}>
  {this.state.questions[0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>



            </div>
       </div>
       </div> :<h5></h5>}
       {this.state.page==4?<div className='questionPage'>
    <div className='central-box'>
    <h1 className='top-heading'>
    {this.state.questions[0][1]}
            </h1>
            
            <div className='main-cont'>
                <div className='btn-cont'>
  <a onClick={() => { this.onChange();this.question5a() ;}} className='btn' >
{this.state.questions[0][2]}    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question5b() ;}}>
  {this.state.questions[0][3]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
<div className='btn-cont'>
  <a className='btn'  onClick={() => { this.onChange();this.question5c() ;}}>
  {this.state.questions[0][4]}
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>



            </div>
       </div>
       </div> :<h5></h5>}
            {/* {this.state.page==0?<button onClick={() => { this.onChange();this.question1a() ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==0?<button onClick={() => { this.onChange();this.question1b();}}>{this.state.questions[0][4]}</button>:<h1></h1>}
            {this.state.page==0?<button onClick={() => { this.onChange();this.question1c() ;}}>{this.state.questions[0][5]}</button>:<h1></h1>}
            {this.state.page==1?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>} */}
            {/* {this.state.page==1?<button onClick={() => { this.onChange();this.question2a ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==1?<button onClick={() => { this.onChange();this.question2b ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==2?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>} */}
            {/* {this.state.page==2?<button onClick={() => { this.onChange();this.question3a() ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==2?<button onClick={() => { this.onChange();this.question3b() ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==2?<button onClick={() => { this.onChange();this.question3d() ;}}>{this.state.questions[0][5]}</button>:<h1></h1>}
            {this.state.page==3?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4a() ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4b() ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==3?<button onClick={() => { this.onChange();this.question4c() ;}}>{this.state.questions[0][4]}</button>:<h1></h1>}
            {this.state.page==4?<h1>{this.state.questions[0][1]}</h1>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a() ;}}>{this.state.questions[0][2]}</button>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a() ;}}>{this.state.questions[0][3]}</button>:<h1></h1>}
            {this.state.page==4?<button onClick={() => { this.onChange();this.question4a() ;}}>{this.state.questions[0][4]}</button>:<h1></h1>} */}
            
            {/* <button onClick={this.onChange}>{this.state.questions[0][2]}</button> */}
            {/* <button>{this.state.questions[0][4]}</button>
            <button>{this.state.questions[0][5]}</button> */}
            
        </div>
        </CSSTransition>
        </TransitionGroup>
      
        )
        
    }
    
};
const mapStateToProps=(state)=>(
    {
        questions:state.questions
    }
);
export default connect(mapStateToProps)(QuestionPage);