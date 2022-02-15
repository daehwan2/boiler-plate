# boiler-plate 강의를 들으면서 학습하고 정리한 내용.

- [강의 출처](https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=1)

## React

1. 페이스북에서 만든 라이브러리. 2013년에 나옴.
2. Components module과 비슷하게 컴포넌트로 이루어져 있어서 reuseable이 뛰어남.
3. Virtual DOM

## ❗ Real DOM vs Virtual DOM

| Real DOM                                                                  | Virtual DOM                                                       |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 10개의 리스트중 한가지만 업데이트 되어도 전체 리스트를 다시 Reload해야함. | 10개의 리스트중 한가지가 업데이트되면 그 아이템만 DOM에서 바꿔줌. |

## Virtual DOM

1. JSX을 렌더링한다. ( Virtual DOM이 Update됨. )
2. Virtual DOM이 이전 Virtual DOM에서 찍어둔 snapshot과 비교를 해서 바뀐 부분을 찾는다. => 이 과정을 **diffing**이라고 부름.
3. 그 바뀐 부분을 Real DOM에서 바꿔준다

## Create-React-App (CRA)

> webpack , babel 등 리액트 프로젝트를 할 수 있게끔하는 설정을 자동으로 해주는 라이브러리.

> [‼ 참고 CRA없이 만든 프로젝트](https://github.com/daehwan2/RockScissorPaper) webpack, babel 수동설정했음.

## Babel

> 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 돌 수 있게 변환 시켜줌.

## Webpack

> 많은 모듈들을 한번에 묶어서 간단하게 만들어 줌.

## 🛑 npm vs npx

### npm

- npm install locally : ./node_modules/.bin 디렉토리에 저장
- npm install globally : bin/directory <br/>ex) /user/local/bin (리눅스) <br/>%AppData%/npm (윈도우)

### npx

- npx는 node registry에 있는 것들을 다운로드 없이 실행 가능.
- 장점
  - 항상최신버젼 사용가능
  - Disk Space 낭비 안함.

## client 리액트 폴더 구조 설명

- \_actions, \_reducer : Redux를 위한 폴더들
- components/views/Sections : 이 안에는 Page를 넣는다.
- App.js : Routing 관련 일을 처리.
- Config.js : 환경 변수 같은 것을 정하는 곳.
- hoc : Higher Order Component의 약자로 ... 추후에 알아보겠음.
- utils : 여러군대에서 쓰일 수 있는 것들을 이곳에 넣어둬서 어디서든 쓸 수있게해줌.

## CORS 이슈, Proxy 설정

![image](https://user-images.githubusercontent.com/53414542/153398662-19b08079-3805-4566-8dc3-85f6c28f1349.png)
이렇게 두개의 다른 포트를 가지고 있는 서버는 아무런 정책없이 Request를 보낼 수 없다.

> 왜❓ CORS 정책 때문에.. (Cross-Origin Resource Sharing) 보안을 위해서..

![image](https://user-images.githubusercontent.com/53414542/153400446-3dc0d1e7-2cc4-4239-8305-ca7f8ce16229.png)

<br/><br/><br/>

## Proxy

![image](https://user-images.githubusercontent.com/53414542/153397182-ad14b790-61f8-4d08-aef8-7c9cd758b76b.png)

- proxy server 사용이유
  1. 회사에서 직원들이나 집안에서의 아이들의 인터넷 사용 제어 ( 특정사이트 차단 )
  2. 캐쉬를 이용해서 더 빠른 인터넷 이용 제공
  3. 더 나은 보안 제공
  4. 이용 제한된 사이트 접근 가능

### ‼ proxy로 cors이슈를 해결할 수 있는 이유 : 프록시 서버를 서버 오리진과 같게함으로써 cors정책에 걸리지 않음.

## concurrently 를 이용해서 프론트, 백 서버 한번에 켜기

> **concurrently** : 여러개의 command를 동시에 작동시킬 수 있게 해주는 Tool.

- 사용법
  1. concurrently 를 npm으로 다운
  2. concurrently "command1 arg" "command2 arg"
     > package.json 에서의 예시

```json
{
"scripts":{
"dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
}
```

## CSS 프레임워크 for ReactJS

1. Material UI
2. React Bootstrap
3. Semantic UI
4. Ant Design
5. Materialize

### ‼ boiler-plate 에서는 [Ant Design](https://ant.design/) 사용.

## Redux

- 상태 관리 라이브러리 ( state container )
- state를 관리 하는것
  ![image](https://user-images.githubusercontent.com/53414542/153406783-cbade886-730b-4e5e-9983-abb5c9f301ff.png)

### Redux 데이터 Flow

![image](https://user-images.githubusercontent.com/53414542/153407144-359b182f-db9c-42f4-937c-783cbda451db.png)
![image](https://user-images.githubusercontent.com/53414542/153407382-cd766cea-54e8-40f5-b0d7-f87486613c8f.png)

- action : 무엇이 일어났는지 설명하는 객체
  > ex) `{ type: 'LIKE_ARTICLE', articleId: 42 }`
- reducer : 이전 state 와 action object를 받은 후에 next state를 return 하는 함수.
  > `(previousState, action) => nextState`
- store : 전체 state을 감싸주는 역할 . 안에 여러 메서드로 state 관리 할수 있음

## setting Redux

> 다운받아야할 Dependency들 : 1. redux 2. react-redux 3. redux-promise 4. redux-thunk

> **redux-promise 와 redux-thunk는 redux 미들웨어인데 action에서 스토어로 넘길때 객체가 와야하는데 promise나 function 이 올수도 있음. 이럴때 각각 어떻게 대처해야하는지를 알려주는 미들웨어**

## Redux 활용 로그인 페이지 구현

3c741a304611ed5a2e956193818efc21d85741da

## Auth 기능

- 아무나 진입 가능한 페이지
- 로그인한 회원만 진입 가능한 페이지
- 로그인한 회원은 진입 못하는 페이지
- 관리자만 진입 가능한 페이지

> **HOC로 구현**

## HOC

- Higher Order Component
- HOC는 리액트 컴포넌트를 인자로 받아서 새로운 리액트 컴포넌트를 리턴하는 함수
- boiler-plate에서는 Authentication 기능 구현할 때 사용

685240e429ecc40b1c6d988e36b97c980b34824d
