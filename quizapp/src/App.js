
import { useState } from 'react' //hooks (built in functions)


function App() {
  const question =[
    {
      title:'Ahmed birthday on ?',
      option :[
        { answerText: '26 October', isCorrect: true },
        { answerText: '02 September', isCorrect: false },
        { answerText: '01 January', isCorrect: false }
      ] 
    },
    {
      title:'Arham First School Name  ?',
      option :[
        { answerText: 'St Patrick High School', isCorrect: false },
        { answerText: 'Marium Child Development Centre', isCorrect: true },
        { answerText: 'St Pauls English High School', isCorrect: false }
      ] 
    },
    {
      title:'Ahmed favourite Food  ?',
      option :[
        { answerText: 'Biryani', isCorrect: false },
        { answerText: 'Alu Chawal', isCorrect: true },
        { answerText: 'Anda Fry', isCorrect: false }
      ] 
    },
    {
      title:'Arham favourite Food  ?',
      option :[
        { answerText: 'Biryani', isCorrect: true },
        { answerText: 'Alu Chawal', isCorrect: false },
        { answerText: 'Anda Fry', isCorrect: false }
      ] 
    },
    {
      title:'Aisha favourite Hobby?',
      option :[
        { answerText: 'Tailor kay pass jana', isCorrect: false },
        { answerText: 'Kapray banana', isCorrect: true },
        { answerText: 'Sona', isCorrect: false }
      ] 
    },
    {
      title:'Araham Favourite Teacher?',
      option :[
        { answerText: 'Miss Bassi', isCorrect: false },
        { answerText: 'Miss Meena', isCorrect: true },
        { answerText: 'Miss Elisha', isCorrect: false }
      ] 
    },

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
