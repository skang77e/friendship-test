import React from 'react'
import styled from 'styled-components';
import kirby from './kirby.png';
import TinderCard from 'react-tinder-card';
import Score from './Score';
import ProgressBar from './Progress';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from './redux/modules/quiz';

const Quiz = (props) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.quiz.answers);
    const quiz = useSelector((state) => state.quiz.quizzes);
    const num = answers.length;
    const onSwipe = (direction) => {
        let answer = direction === 'left' ? 'O' : 'X';

        if(answer === quiz[num].answer){
            dispatch(addAnswer(true));
        }else{
            dispatch(addAnswer(false));
        }
      }

    if(num > quiz.length -1){
        return <Score {...props}/>;
    }

    return (
        <QuizContainer>
            <ProgressBar currentNum={num}/>
            <span> {num +1}번 문제</span>
            {quiz.map((q, idx) => {
                if(num === idx){
                    return (
                        <Question key={idx}>{q.question}</Question>
                    )
                }
            })}
            
            <AnswerContinaer>
                <Answer>
                    o
                </Answer>
                <Answer>
                    x
                </Answer>
            </AnswerContinaer>

            {quiz.map((q, idx) => {
                if(num === idx){
                    return (
                        <ImgContainer key={idx}>
                            <TinderCard onSwipe={onSwipe}>
                                <img src={kirby} alt="kirbyImage"/>
                            </TinderCard>
                        </ImgContainer>
                    )
                }
            })}
        </QuizContainer>
    )
}

const QuizContainer = styled.div`
    text-align:center;
    width:100%;
    & > span {
        background-color: #fef5d5;
        padding: 5px;
        border-radius: 30px;  
    }
`
const Question = styled.h2`
    font-size:1.5em;
`
const AnswerContinaer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    top:0;
    left:0;
    position: absolute;
    z-index:1;
`

const Answer = styled.div`
    width: 50%;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:10em;
`

const ImgContainer = styled.div`
    position: fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    display:flex;
    z-index:10;
    align-items: center;
    justify-content: center;
    & > div > img {
        max-width: 120px;
    }
    & > div{
        background-color: #ffd6aa;
        border-radius: 150px;
        padding:10px;
    }
`

export default withRouter(Quiz);
