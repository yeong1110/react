/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Component/Modal';

function App() {
  let post = "나메코"
  let [a, setA] = useState(['먹기','자기','놀기']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");

  let enter = function(e){
    if(e.keyCode === "13"){
      console.log(1);
    }
  }


  let isFalse = function(){
    if(input == "" || input == null || input == undefined ){
      alert("빔")
    }else{
      let copya = [...a];
      copya.unshift(input);
      setA(copya);
      let copyLike2 = [...like];
      copyLike2.unshift(0);
      setLike(copyLike2);
    }
  }

  return (
    <div className="App">
      <div className='black_nav'>
        <h4 style={{color:"#3b7e69",fontSize:"20px"}}>오늘 뭐할래?</h4>
      </div>
      <div>
        <input id='text' type="text" onKeyUp={(e)=>{
          (e.keyCode === 13 ? isFalse(): console.log(1))
        }} onChange={(e)=>{
          setInput(e.target.value)
          console.log(input);
        }}/>
        <button  onClick={isFalse}>글쓰기</button>
        {
          a.map(function(parm,i){
            return (
              <div className='list' key={i}>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true)
              }}>{a[i]}</h4> <div className='btn_box'> <div className='like_box'> <span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] +1;
                setLike(copyLike)
              }}>💖</span>{like[i]}</div>
              <button id='close' onClick={(i)=>{
                let copya2 = [...a];
                copya2.splice(i,1);
                setA(copya2);
              }}>X</button></div> 
              </div>
              
            )
          })
        }

        {modal == true ? <Modal color="skyblue" name={a} title={title} /> : null} 
        </div>
    </div>
  );
}

export default App;
