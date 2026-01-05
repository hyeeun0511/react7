import './css/Style.css';  // ./ :현재 폴더
import idog from './dog.jpg'

function App() {

  // css문법 내부링크 방식 (잘 안함)
  // css문법 외부링크 방식 선호함
  // - 문법구조가 틀림, style={title1} 변수를 입력적용
  // var : 예전버전의 변수선언
  // let : 최근버전의 변수선언
  // const : 최근버전의 상수선언
  const title1 = {
    // textAlign : 'center',
    // backgroundColor : 'green',
    // fontSize : '40px'
  }
  
  return (
    <>
    <div className="App">
      <div></div>
      <h2 className='main' style={title1}>메인페이지</h2>
      {/* src폴더에서 import사용방법 */}
      <img src={idog}/>
      {/* public폴더에서 절대링크 사용방법 */}
      <img src='/images/1.jpg'></img>
    </div>
    </>
  );
}

export default App;
