import  database  from '../firebase/firebase';
export const startSetQuestions = () => {
    return (dispatch) => {
     
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
})