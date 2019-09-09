import React from 'react';
import {CSSTransition} from 'react-transition-group';
import QuestionPage from './QuestionPage';
const FirstTime=(props)=>(
    <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="fade"
    >
    <QuestionPage history= {props.history}/>
    </CSSTransition>
);
export default FirstTime;