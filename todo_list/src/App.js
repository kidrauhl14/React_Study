
function App() {

  // todoList 데이터 만들기 (객체를 원소로 갖는 배열열)
  const todoList = [
    {
      id: 0,
      title: " 방 청소하기",
      isChecked: false, /*todoList에서 완료한 데이터는 isChecked값이 true */
    },
    {
      id: 1,
      title: "빨래하기",
      isChecked: true,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      isChecked: false,
    },
    {      
      id: 3,
      title: "헬스장 가기",
      isChecked: true,
    },
    {
      id: 4,
      title: "산책 가기",
      isChecked: false,
    },
    { 
      id: 5,
      title: "책 읽기",
      isChecked:true,
    },
  ];

  // 배열의 filter메서드를 활용해, checkedList를 만든다.
  const checkedList = todoList.filter((todoItem) => todoItem.isChecked);

  // map을 활용해, checkedItems를 만든다.
  const checkedItems = checkedList.map((checkedItem) => (
    <li>{checkedItem.title}</li>
  ));

  return (
    <section>
      <h1>완료한 투두리스트</h1>
      <ul>
        {checkedItems}
      </ul>
    </section>
  );
}

export default App;
