import {useState,useEffect} from 'react';
import './css/Style.css';
import Movies from './comp/Movies';
import MovieForm from './comp/MovieForm';


function App() {

  const [movies, setMovies] = useState(
    [
      {'no':3, 'title':'아바타3', 'year':2006},
      {'no':2, 'title':'아바타2', 'year':2004},
      {'no':1, 'title':'아바타1', 'year':2022},
    ]
  );


  // 2. 데이터 삭제 : filter() 사용
  // 삭제할 pk(primary key)값을 전달받아 해당 데이터 삭제
  // renderMovies의 위에 위치해야함
  const delMovie = (no) => {
    setMovies(movies.filter( (movie) => {return(movie.no != no)})) //결과를 충족한 데이터만 return으로 전달됨
  }

  // 1. 리스트 출력 : 반복문 map() 사용
  // const renderMovies = '반복데이터';
  // map()함수는 배열에 있는 데이터를 1개씩 가져와서 함수를 적용시켜줌
  // (조건)?맞으면:틀리면  => length가 있으면 movies 출력 | 0이면 '데이터가 없습니다.' 출력
  const renderMovies = 
  // 삼항식
  movies.length?
  // 있으면
  movies.map( (movie)=>{
    return(<Movies movie={movie} delMovie={delMovie} key={movie.no}  /> ) // movie라는 이름으로 1개 데이터 전달 => key속성 없으면 에러
  }) // 데이터 삭제 함수 같이 넘겨줌
  :
  // 없으면
  <div className="card">
      <h5 className="card-header"></h5>
      <div className="card-body">
        <h5 className="card-title">데이터가 없습니다.</h5>
      </div>
  </div>
;

  // {return(movie.no != no)} 데이터 삭제
  // {return(movie.no == no)} 데이터 유지 


  // 3. 데이터 추가 : [...movies, {새데이터}] 사용


  return (
    <div className="root">
      <h2>영화등록</h2>
      <MovieForm movies={movies} setMovies={setMovies} />

      {/* 영화리스트 */}
      <h2>영화리스트</h2>
      {renderMovies}

    </div>
  );
}

export default App;