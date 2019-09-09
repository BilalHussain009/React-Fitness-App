import  database  from '../firebase/firebase';
export const startSetQuestions = () => {
    return (dispatch,getState) => {
     
      return database.ref(`questions`).once('value').then((snapshot) => {
        const questions = [];
       
        snapshot.forEach((childSnapshot) => {
          questions.push([
            
            childSnapshot.val()
          ]);
        });
  
        dispatch(setQuestions(questions));
      });
    };
  };
export const setQuestions=(questions)=>({
    type:'ADD_QUESTIONS',
    questions
});
export const addChoices=(choice)=>({
  type:'ADD_CHOICE',
  choice
});
export const startAddChoices=(choice)=>{
  return(dispatch,getState)=>{
    console.log(choice);
    let choices=[];
    localStorage.getItem('choices')==[] ? choices=[]:choices=[localStorage.getItem('choices')];
    console.log(choices);
    choices.push(choice);
    return localStorage.setItem('choices',choices);
  }
}
