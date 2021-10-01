
import { useState } from 'react' //hooks (built in functions)


function App() {
  const question =[
    {title:'Pakistan First Prime Minister?',option :[{ answerText: 'Nawaz Sharif', isCorrect: false },{ answerText: 'Liaqat Ali Khan', isCorrect: true },{ answerText: 'Bilawal Bhutto', isCorrect: false }] },
    {title:'Germany best Car Manufacturer ?',option :[{ answerText: 'Audi', isCorrect: false },{ answerText: 'BMW', isCorrect: true },{ answerText: 'Tesla', isCorrect: false }] },
    {title:'PS5 Lanuch on ?',option :[{ answerText: '1993', isCorrect: false },{ answerText: '2019', isCorrect: true },{ answerText: '2010', isCorrect: false }] },
    {title:'World best Airline?',option :[{ answerText: 'Turkish', isCorrect: true },{ answerText: 'Pegasus', isCorrect: false },{ answerText: 'Emirates', isCorrect: false }] },
    {title:'Sweden Best University ?',option :[{ answerText: 'Stockholm University', isCorrect: true },{ answerText: 'Lulea University of Technology', isCorrect: false },{ answerText: 'Uppsala University', isCorrect: false }] },

]

const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const resetQuestion =() => 
{
  console.log("Answer===>resetQuestion:")
  setCurrentQuestionIndex(0);
  setShowScore(false);
  setScore(0);
}
const handleAnswerOptionClick = (userAnwer) => {
  console.log("Answer===>isCorrect:",userAnwer.isCorrect)
  console.log("Answer===>answerText:",userAnwer.answerText)
  if (userAnwer.isCorrect === true ) {
    console.log("Answer===>score:",score)
    setScore(score + 1);
  }
 
  const nextQuestion = currentQuestionIndex + 1;
  console.log("Answer===>nextQuestion:",nextQuestion)
  console.log("Answer===>question.length:",question.length)
  if (nextQuestion < question.length) {
    console.log("Answer===>setCurrentQuestionIndex(nextQuestion):",nextQuestion)
    setCurrentQuestionIndex(nextQuestion);
  } else {
    setShowScore(true);
    console.log("Answer===>setShowScore:true")
   
  }
};



return (
  <div className='app'>
     
        {
        showScore
         ?
      
        (
        <div className='score-section'>
        Thank you for your Quiz <br />You scored {score} out of {question.length}
        <br />
        {(score/question.length)*100}%
        <button onClick={resetQuestion}>Start Again</button>
        </div>
      )
        :(
        <>
        <div className='question-section'>
        <div className='question-count'>Question#({currentQuestionIndex+1}/{question.length})</div>
        <div className='question-text'>{question[currentQuestionIndex].title} </div>
        </div>
        <br />
        <div className='answer-section'>
          {
          question[currentQuestionIndex].option.map(item=> 
            {
             return(<button onClick={() => handleAnswerOptionClick(item)}>{item.answerText}</button>)
             }
            
            )}
          </div>
        </>
        )}
     
    </div>   
  );
}

export default App;
