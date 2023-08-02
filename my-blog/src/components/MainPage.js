import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      {/* 주의사항: <Link>와 <link>는 완전히 다른 역할을 하는 태그!
      : <Link>는 React Router 라이브러리에서 라우팅을 처리하는 데 사용되는 컴포넌트이고, 
      <link>는 HTML 문서에서 메타데이터와 외부 리소스를 가져오는 데 사용되는 태그입니다. 

      <Link>
      :React Router 라이브러리(react-router-dom)에서 제공하는 컴포넌트로, 라우팅 링크를 만들어주는 역할을 합니다.
      <Link> 컴포넌트는 클릭 시 브라우저의 history API를 사용하여 
      페이지를 다시 로드하지 않고도 라우팅을 처리합니다.
      예를 들어, <Link to="/about">About</Link>와 같이 사용하여 "/about" 경로로 이동하는 라우팅 링크를 만들 수 있습니다.

      <link>
      :HTML 문서의 <head> 섹션에서 사용되는 메타데이터를 정의하는 태그입니다.
      주로 외부 리소스를 가져오거나 스타일시트를 연결할 때 사용됩니다.
      예를 들어, <link rel="stylesheet" href="styles.css">와 같이 사용하여 
      "styles.css"라는 외부 스타일시트를 가져올 수 있습니다. */}


      {/* <Link> 태그를 사용했을 때 */}
        <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link>

      {/* <a> 태그를 사용했을 때: 새로운 html을 불러온다. 기본적으로 페이지를 이동하고, 
      새로운 페이지를 불러올 때 깜빡인다. 
      (Blog를 클릭했을 때 v.s. Tech를 클릭했을 때) 비교해봐!
       => SPA(single page application)의 장점이 사라진다. */}
      {/* <Link to="/blog">Blog</Link> | <a href="/tech">Tech</a> */}
    </div>
  );
}

export default MainPage;