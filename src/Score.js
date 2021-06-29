import React from 'react'
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { addRank } from './redux/modules/rank';

const Score = (props) => {
    const name = useSelector((state) => state.quiz.name);
    const answers = useSelector((state) => state.quiz.answers);
    const correct = answers.filter(answer => answer === true);
    const dispatch = useDispatch();
    let score = correct.length / answers.length * 100;
    return (
        <QuizConatiner>
            <h3><Highlighted>{name}</Highlighted> 퀴즈에 대한 내 점수는?</h3>

            <h2><Highlighted>{score}</Highlighted> 점</h2>

            <ButtonMsg onClick={() => {
                dispatch(addRank(score));
                props.history.push("/msg");
            }}>메세지 남기러 가기</ButtonMsg>
        </QuizConatiner>    
        )
}

const Highlighted = styled.span`
    border-radius: 30px;
    background-color: #FDF4D4;
    padding:5px 10px;
`

const QuizConatiner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ButtonMsg = styled.button`
    display: block;
    background-color: #DBDAFD;
    border-radius: 30px;
    margin-bottom: 20px;
    width:100%;
    border-color:transparent;
    padding:10px;
`

export default Score
