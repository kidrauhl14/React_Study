### SPA와 react-router-dom 실습
https://reactrouter.com/en/6.14.2/start/overview
1. SPA란
2. react-router-dom 설치
3. Routes 구성하기
4. Link 추가하기 (link 태그가 아니라 'L'ink 컴포넌트 태그!)
5. Nested Routes 구성하기
6. Url Parameter
7. Navigate
8. 기타 기능

##### function ReactPage()에서<br>
   아직 api call하는 것까지는 안배웠으니까, 일단 static한 data(객체가 들어있는 배열 docs)를 넣어놓았음<br>
   이제부터 비동기 프로그래밍과 API호출에 대해 공부해보면서<br>
   api call -> react에 해당하는 글의 목록을 응답받을 수 있도록 코드를 바꿔보자<br>


### 비동기 프로그래밍과 API호출
1. 비동기 프로그래밍과 Promise
2. async await
3. fetch API (https://jsonplaceholder.typicode.com/guide/)
4. axios: fetch보다 axios라이브러리가 더 흔하게 많이 쓰인다. 이전에 fetch로 짠 코드를, axios로 바꿔보자!<br>(https://axios-http.com/kr/docs/intro)
5. useEffect 내에서 API호출 시, 주의할 점
6. Custom Hook
7. useFetch
8. swr과 React-Query
