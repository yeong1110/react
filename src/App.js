/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Component/Modal';

function App() {
  let post = "나메코"
  let [a, setA] = useState(['제목1','제목2','제목3']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");


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
        <h4 style={{color:"#ff0000",fontSize:"20px"}}>블로그</h4>
      </div>
        
        {
          a.map(function(parm,i){
            return (
              <div className='list' key={i}>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true)
              }}>{a[i]}</h4><span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] +1;
                setLike(copyLike)
              }}>💖</span>{like[i]}
              <p>글쓴이 사람</p>
              <button onClick={(i)=>{
                let copya2 = [...a];
                copya2.splice(i,1);
                setA(copya2);
              }}>X</button>
              </div>
              
            )
          })
        }
        <input type="text" onChange={(e)=>{
          // console.log(e.target.value)

          setInput(e.target.value)
          console.log(input);
        }}/>
        <button onClick={isFalse}>글쓰기</button>
        {modal == true ? <Modal color="skyblue" name={a} title={title} /> : null} 
      
    </div>
  );
}

export default App;
