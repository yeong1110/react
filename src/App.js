/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Component/Modal';

function App() {
  let post = "나메코"
  let [a, setA] = useState(['블로그 글 제목b1','블로그 글 제목a2','블로그 글 제목c3'])
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); //상태 저장


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
              <p>4월6일 발행</p>
              </div>
              
            )
          })
        }
        {modal == true ? <Modal color="skyblue" name={a} title={title} /> : null} 
      
    </div>
  );
}

export default App;
