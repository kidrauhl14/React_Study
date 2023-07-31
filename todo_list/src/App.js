
function App() {

  // todoList 배열 만들기
  const todoList = [
    " 방 청소하기",
    "빨래하기",
    "리액트 공부하기",
    "헬스장 가기",
    "산책 가기",
    "책 읽기",
    "러닝하기",
  ];


  // map을 활용해, 데이터를 react element가 담긴 todoItems로 변경
  const todoItems = todoList.map((todoItem) => <li>{todoItem}</li>);

  return (
    <section>
      <h1>나의 투두리스트</h1>
      {/* 만들어진 todoItem을 ul 안에 넣기 */}
      <ul>
        {todoItems}
      </ul>
    </section>
  );
}

export default App;
