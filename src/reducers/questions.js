const defaultState=[]

export default(state=defaultState,action)=>{
    switch(action.type){
        case 'ADD_QUESTIONS':
            return action.questions;
        default:
            return state;
    }
};
