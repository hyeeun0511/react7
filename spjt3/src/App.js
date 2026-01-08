import logo from './logo.svg';
import React,{useState,useEffect,useRef, use} from 'react';
import './App.css';
import './css/Style.css';

function App() {

  // useState변수 - 특징 : 값이 변경되면 전체 reload(재렌더링)됨
  const [cnt,setCnt] = useState(0);
  const [id,setId] = useState('aaa');
  // useRef변수 - 특징 : 값이 변경되어도 reload(재렌더링)되지 않음. reload 되어도 값을 유지함
  // useReef : current키에 값을 저장 cntRef.current
  const cntRef = useRef(10);

  // 최초실행시 실행됨  
  useEffect(
    () =>{
      console.log("최초 실행시 실행")
    },[cnt]
  );
  // 최초 1회만 실행됨
  useEffect(
    () =>{
      console.log("1회만 실행")
    },[]
  );

  let count = 0;  // 일반변수 - 특징 : reload(재렌더링)되면 값이 초기화(리셋)됨

  const cntBtn = () => {
    // alert('확인');
    // ## 출력 방식 1
    // # useState변수 값 출력방식 #
    setCnt(cnt+1);
    console.log("cnt : ", cnt);  // console 창에 숫자 증가 확인
    // 일반변수값 출력
    console.log("count : ", count);  // console 창에 숫자 증가 확인
    // useRef변수값 출력
    console.log("refcount : ",cntRef.current);
  }

  // # 출력 방식 2 : 일반변수 값 출력방식 #   
  const countBtn = () => {
    count += 1;  // count = count + 1;  // 숫자 1씩 증가
    console.log("count : ",count);  // console 창에 숫자 증가 확인
    // useState변수 - reload
    setId('bbb'+count);
    console.log("id",id);
  }

  // # useRef변수 값 출력방식 #
  const refBtn = () => {
    // ## 출력 방식 3
    // # 일반변수 값 출력방식 # 
    cntRef.current += 1;
    console.log("refcount : ",cntRef.current);
  }

  


  return (
    <div className="root">
      <div className='txt' id='main'>{cnt}</div>
      <button onClick={cntBtn}>useState확인</button>
      <button onClick={countBtn}>일반변수확인</button>
      <button onClick={refBtn}>useRef확인</button>
    </div>
  );
}

export default App;
