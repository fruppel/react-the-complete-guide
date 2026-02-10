import {useCallback, useState} from 'react';
import Question from './Question.jsx';
import QUESTIONS from '../../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((answer) => {
        setUserAnswers(prevUserAnswers => [...prevUserAnswers, answer]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="quiz">
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Complete!</h2>
        </div>;
    }

    return <div id="quiz">
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
        />
    </div>;
}
