import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const quiz = useSelector((state) => state.quiz.quizzes);
    return (
        <ProgressBar>
            <Percentage width={((props.currentNum) / quiz.length *100 + "%")}>
            </Percentage>
            <Dot/>
        </ProgressBar>
    )
}

const ProgressBar = styled.div`
    width:100%;
    height:20px;
    display:flex;
    background-color: #eee;
    border-radius: 30px;
    margin-bottom: 20px;
    align-items: center;

`
const Percentage = styled.div`
    height:20px;
    display:block;
    background-color:#F09C91;
    border-radius:30px;
    transition: 1s width;
    width: ${props => props.width}
`

const Dot = styled.div`
    background: #fff;
    border: 5px solid #F09C91;
    box-sizing: border-box;
    margin: 0px 0px 0px -10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`
export default Progress
