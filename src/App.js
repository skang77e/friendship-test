import React from 'react';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Ranking from './Ranking';
import Message from './Message';
import {Route} from 'react-router-dom';
import { withRouter } from "react-router";
import { firestore } from "./firebase"; 
import './App.css';

import {connect} from 'react-redux';

const mapStateToProps = (state) =>({
  ranks: state.rank.ranks,
});

const mapDispatchToProps = (dispatch) =>({

});
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    // const fs_test = firestore.collection("friendship_test1");
    // fs_test.doc("rank").set({
    //   user_name: "",
    //   user_message: "",
    //   user_score: "",
    //   score_text: {
    //     60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    //     80: "우와! 우리는 엄청 가까운 사이!",
    //     100: "둘도 없는 단짝이에요! :)",
    //   },
    //   ranking: [
    //     { score: 100, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 80, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },
    //     { score: 90, name: "강상준", message: "안녕 르탄아!" },

    //   ],
    
    // })
    // fs_test.doc("quiz").set({
    //   name: "강상준",
    //   answers: [],
    //   quizzes: [
    //       {answer: "O", question: "상준이는 1살이다"},
    //       {answer: "X", question: "상준이는 2살이다"},
    //       {answer: "X", question: "상준이는 3살이다"},
    //       {answer: "O", question: "상준이는 4살이다"},
    //       {answer: "O", question: "상준이는 5살이다"},
    //     ],  
    // })
  }
  render() {
      return (
      <div className="App">
        <Route exact path="/" component={Start}/> 
        <Route path="/quiz" component={Quiz}/> 
        <Route path="/score" component={Score}/> 
        <Route path="/ranking" component={Ranking}/> 
        <Route path="/msg" component={Message}/> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));