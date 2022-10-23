import React from 'react';
import './App.css';
import Questions from "./Quiz"
import QuizData  from './QuizData';

function App() {
  //steps i took
  //Create a JSX and css template for the app
  // Create an array of 5 objects with an id each
//Create a state that takes in an empty array
//map over that array to return the Quiz component for all elements of the array
//make the dsiplay itenary with the condition that if the array is lesss than 0 display only front page  else the questions
//set an event handler callback function to the button so when clicked will run the allNewArray function 
//use nanoid  as a props for id the Question been picked 
// use useEFfect to fetch random questions and set them to the Quiz array
const [quiz, setQuiz]=React.useState([])



// React.useEffect(()=>{
//   console.log("effect ran")
//     fetch("https://opentdb.com/api.php?amount=5&difficulty=medium")
//       .then(res=>res.json())
//       .then(data => setQuiz(data.results))
// },[])



function handleClick(){
  setQuiz(Quiz)
}

const Quiz = QuizData.map(q=>{
  
  return <Questions
        question = {q.question}
        incorrectAnswer={q.incorrectAnswers}
        correct={q.correctAnswer}
        key={q.id} 
        id={q.id}
      />
})
console.log("jim", Quiz)
  return (
    <div className="App">
        {
          quiz.length > 0?
          quiz:
          <>
                <h2>Quizzical </h2>
              <p>To test my skills</p>   
            <button className='button' onClick={handleClick}> Start Quiz</button>
        </>
        }
  {/* {Quiz} */}
    </div>
  );
}

export default App;
