const LOAD_QUIZ = 'quiz/LOAD_QUIZ';
const ADD_ANSWER = 'quiz/ADD_ANSWER';
const RESET_ANSWER = 'quiz/RESET_ANSWER';

const initialState = {
    name: "강상준",
    score_texts: {
      60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
      80: "우와! 우리는 엄청 가까운 사이!",
      100: "둘도 없는 단짝이에요! :)",
    },
    answers: [],
    quizzes: [
        {answer: "O", question: "상준이는 1살이다"},
        {answer: "X", question: "상준이는 2살이다"},
        {answer: "X", question: "상준이는 3살이다"},
        {answer: "O", question: "상준이는 4살이다"},
        {answer: "O", question: "상준이는 5살이다"},
      ],
}

export const loadQuiz = (quiz_list) => {
    return {type: LOAD_QUIZ, quiz_list}
}

export const addAnswer = (answer) => {
    return {type: ADD_ANSWER, answer}
}

export const resetAnswer = () => {
    return {type: RESET_ANSWER}
}

export default function reducer(state = initialState, action={}){
    switch(action.type){
        case 'quiz/LOAD_QUIZ': {
            return { ...state, quizzes: action.quiz_list }
        }
        case 'quiz/ADD_ANSWER': {
            return { ...state, answers: [...state.answers, action.answer] }
        }

        case 'quiz/RESET_ANSWER': {
            return { ...state, answers: [] }
        }

        default:
            return state;
    }
}