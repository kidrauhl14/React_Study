import React, {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답받기
  const [docs, setDocs] = useState([])

  // api call 대신해서 아래에 static한 data를 이용해 글의 목록을 불러온 방식 (api call 학습 전)
  // 객체가 들어있는 배열 docs
  // const docs = [
  //   {
  //     id: 1,
  //     title: "React 공부를 시작하면서",
  //     date: "05/01/2021",
  //   },
  //   {
  //     id: 2,
  //     title: "CRA없이 리액트로 프로젝트 시작하기",
  //     date: "12/01/2021",
  //   },
  //   {
  //     id: 3,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     date: "31/01/2021",
  //   },
  //   {
  //     id: 4,
  //     title: "React 프로젝트에 Prettier 적용하기",
  //     date: "15/02/2021",
  //   },
  //   {
  //     id: 5,
  //     title: "React의 setState() 제대로 사용하기",
  //     date: "28/02/2021",
  //   },
  // ];

  useEffect(() => {
    // async를 붙인 함수를 호출하면, 결과는 항상 promise다!
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result); // 상태값
      // setDocs(result);
      return result;
    }
    fetchData().then((res) => {
      setDocs(res);
    });
  }, []);

  return (
    <div>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> 하위페이지(ReactDocPage)는 nested 안하기로 해서 주석처리함*/}
    </div>
  );
};

export default ReactPage;