import React from 'react'
import { Outlet, Link } from 'react-router-dom';
// 중첩된 라우팅을 구성하기 위해 Outlet컴포넌트 사용!

export default function TechPage() {
  return (
    <>
      <div>
        <h1>TechPage</h1>
        <Link to="/tech/react">React</Link>
        <Link to="/tech/javascript">javascript</Link>
      </div>

      {/* Outlet컴포넌트 위치에 자식(child) 페이지가 들어가게 된다. */}
      <Outlet></Outlet>
    </>
  );
}

