/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Modal from './Component/Modal';

function App() {
  let post = "나메코"
  let [a, setA] = useState(['먹기','자기','놀기']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");
  let [date, setDate] = useState(getToday);
  let titleInput = useRef();
  
  function getToday() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = `${year}-${month}-${day}`;
    return(dateString);
    }



  let isFalse = function(){
    if(input == "" || input == null || input == undefined ){
      alert("내용을 입력해주세요")
    }else{
      titleInput.current.value = "";
      //document.getElementById("text").value = "";
      let copya = [...a];
      copya.unshift(input);
      setA(copya);
      let copyLike2 = [...like];
      copyLike2.unshift(0);
      setLike(copyLike2);
      setInput("");
    }
  }

  let enterHandle = (e) => {
    if(e.keyCode === 13){
      isFalse();
    }
  }

  let modalHandler = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <div className='black_nav'>
        <h4 style={{color:"#4c4722",fontSize:"20px"}}>오늘 뭐할래?</h4>
      </div>
      <div>
        <div className='input_box'>
          <input ref={titleInput} id='text' type="text" onKeyUp={e => enterHandle(e)}
          onChange={(e)=>{
            setInput(e.target.value)
            console.log(input);
          }}/>
          <button id='render' onClick={isFalse}>글쓰기</button>
        </div>
        <div className='list_box'>
        {
          a.map(function(parm,i){
            return (
              <div className='list' key={i}>
                <div className='list_title'>
                <h4 onClick={()=>{
                setTitle(i);
                //setModal(modal == true ? modal = false : modal = true)
                modalHandler();
              }}>{a[i]}</h4>
                <p>{date}</p>
                </div>
                <div className='btn_box'> <div className='like_box'> <span onClick={()=>{
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
        </div>

        {modal == true ? <Modal color="skyblue" name={a} title={title} date={date} setModal={modalHandler}/> : null} 
        </div>
    </div>
  );
}

export default App;
