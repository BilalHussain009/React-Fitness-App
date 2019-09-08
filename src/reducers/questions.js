const defaultState=[]

export default(state=defaultState,action)=>{
    switch(action.type){
        case 'ADD_QUESTIONS':
            return action.questions;
        case 'ADD_CHOICE':
            return action.choice;
        default:
            return state;
    }
};
