import React,{ useState } from 'react';
import './App.css';
import './css/Style.css';

function App() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [txtId, setTxtId] = useState('');
  const [txtName, setTxtName] = useState('');

  const tBtn = () => {
    alert('아이디,이름을 출력합니다.');
    setTxtId(id);
    setTxtName(name);

    // 입력창 초기화
    setId('');
    setName('');
  }

  // 엔터키 처리
  const txtKeyUp = (e) => {
    if(e.key === 'Enter'){
      tBtn();
    }
  }



  
  return (
    <div className="root">
      <div className='txtName'>{txtId},{txtName}</div>
      <input type='text' placeholder='아이디를 입력하세요.' value={id} onChange={(e)=>setId(e.target.value)} /><br />
      <input type='text' placeholder='이름을 입력하세요.' value={name} onKeyUp={txtKeyUp} onChange={(e)=>setName(e.target.value)}/><br />
      <button onClick={tBtn}>확인</button>                           
      {/* onKeyUp={txtKeyUp} 밑에 넣은 이유 : 에러 대비.  */}
    </div>
  );
}

export default App;