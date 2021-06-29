import React from 'react'
import logo from './memoji.png';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {addUserName} from './redux/modules/rank';
const Start = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const input_text = React.useRef();
    return (
        <div style={{textAlign:"center"}}>
            <Memoji alt="Memoji logo" src={logo}/>

            <h1 className="title">나는 <Highlighted>{name}</Highlighted> 에 대해 얼마나 알고 있을까?</h1>
            <input ref={input_text} className="input-box" type="text" placeholder="내 이름"></input>
            <Button onClick={() => {
                dispatch(addUserName(input_text.current.value));
                props.history.push("/quiz");
            } }>시작하기</Button>
        </div>
    )
}

export default Start;

const Highlighted = styled.span`
    border-radius: 30px;
    background-color: #FDF4D4;
    padding:5px 10px;
`

const Button = styled.button`
    display: block;
    margin: 0 auto;
    background: #DBDAFD;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
`

const Memoji = styled.img`
    width: 300px;
`

