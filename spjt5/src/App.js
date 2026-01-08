import './App.css';
import './css/Style.css';
import React,{ useState } from 'react';

function App() {

  // useState변수 : 값이 변경되면 리로딩이 됨
  const [cnt, setCnt] = useState(0);
  const [inputNum, setInputNum] = useState('');
  //useFef 변수 - focus() : 값이 변경되어도 리로딩을 하지않음
  const numRef = React.useRef();

  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');

  // 함수 선언
  const countBtn = () => {
    setCnt(cnt + 1);
  }

  const upBtn = () => {
    //'0' == 0
    if (inputNum.trim() === "") {
      alert('숫자를 입력하세요.');
      numRef.current.focus(); // 포커스이동 // current안에 값이 있음
      return;
    }
    setCnt(parseInt(inputNum));
    setInputNum('');
  }

  const onKeyUp = (e) => {
    // if(e.keyCode === 13){
    //   upBtn();
    // }
    if(e.key === 'Enter'){
      upBtn();
    }
  }

  const loginBtn = () => {
    setInputId('');
    setInputName('');
  }

  return (
    <div className="root">
      <h2>메인페이지</h2>
      <div className="txt">{cnt}</div>
      <input type='text' placeholder='숫자를 입력하세요.' value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
        onKeyUp={onKeyUp} /><br />
      <button onClick={countBtn}>숫자증가</button><br />
      <button onClick={upBtn}>input확인</button>
      <hr />
      <h2>로그인</h2>
      <div className="txt">{inputId} {inputName}</div>
      <input type='text' placeholder='아이디를 입력하세요.' value={inputId}
        onChange={(e) => setInputId(e.target.value)} /><br />
      <input type='text' placeholder='이름을 입력하세요.' value={inputName}
        onChange={(e) => setInputName(e.target.value)} /><br />
      <button onClick={loginBtn}>로그인</button>
    </div>
  );
}

export default App;