# custom-component

> Postcss를 이용하여 css styling 하였고 구현에 필요한 icon은 fontawesome 라이브러리를 이용함

## 목차

1. [Toggle](#togglejs)
2. [Modal](#modaljs)
3. [Tab](#tabjs)
4. [Tag](#tagjs)
   <br>
   <br>

## Toggle.js

#### 구현방법

- input(checkbox)와 label을 이용하여 구현함
- checkbox의 onChange 속성을 사용하여 checkbox의 상태가 변화할 때 마다 handleToggle이라는 콜백함수가 실행되게 함
- handleToggle에서는 ref를 이용하여 checkbox의 checked 속성이 true인지, false인지 파악 하고 그 값을 toggleSwitch라는 state로 관리함
- 삼항연산자를 이용해 toggleSwitch의 값에 따라 'on' 또는 'off'라는 글자가 보이게 함
- checkbox는 display:none하여 보이지 않게 하고 id="toggle"로 연결한
  label(.outer)을 보이게 함
- .checkbox가 checked 상태일 때 .inner의 x좌표가 tranlate 되게 하여 스위치가 움직이는 모양을 구현함

#### 어려웠던 점

- checkbox가 checked 상태가 됐을 때 .inner라는 element에 변화를 주는 방법을 찾는데 시간을 썼음  
  어떤 선택자를 써야할지 검색을 하다가 일반 형제 조합자인 '~'을 찾아서 적용하여 구현함

#### 실행방법

  <img src="https://user-images.githubusercontent.com/84840032/152739840-dee5be14-ada2-4029-8e26-9ebfbb8867cc.gif">

- 초기설정은 checked 상태로 toggle switch가 on되어 있음
- toggle switch를 클릭하면 off 상태로 바뀌며 switch의 색깔과 하단의 문구가 변함
  <br><br>

## Modal.js

#### 구현방법

- .openButton을 클릭하면 openModal 콜백함수가 실행됨
  openModal 콜백함수에서는 .modal과 .modalWrapper 의 display 속성을 'block'으로 변경함

- .modal의 .closeModal 버튼을 클릭하면 .modal과 .modalWrapper 의 display 속성을 'none'으로 변경하여 화면에 렌더링되지 않음

- .modalWrapper의 z-index를 1로 설정하여 .openButton 보다 상위의 레이어를 차지하여 .openModal 버튼은 가려짐
- .modalWrapper 의 position을 absolute, top, left를 0, width,height를 100%로 하여 전체 섹션을 차지하게 함

#### 어려웠던 점

- 없음

#### 실행방법

<img src="https://user-images.githubusercontent.com/84840032/152743278-c8c9a3c7-cbf0-4433-871a-96f8a8208296.gif">

- "Open Modal" 이라고 써있는 버튼을 클릭하면 "HELLO CODESTATES"라고 써있는 모달창이 나타남
- 모달창의 x 아이콘을 클릭하면 모달창이 닫히며 초기화면으로 돌아감
  <br><br>

## Tab.js

#### 구현방법

- tab의 속성들 (탭에 표시될 내용, 탭이 클릭될 때 하단에 표시될 내용, ref객체)을 담은 tabs라는 배열을 선언함
- tabs 배열을 map으로 순회하면서 li태그인 .tab을 생성함
- .tab을 클릭하면 클릭한 tab의 index를 인자로 전달하는 onTabClicked 콜백함수를 실행함
- onTabClicked 함수에서는 전달받은 index를 state로 관리하고, tabs 배열에서 각 인자의 index와 parameter로 전달받은 index를 비교하여 일치하는 tab의 'isselected'속성을 true로 설정함

#### 어려웠던 점

- 클릭한 탭의 색을 변경할 때 styled-component나 순수 css라면 classList를 이용해서 class를 추가하면 간편할 것 같은데 css 전처리기인 Postcss를 이용하다보니 동적으로 class를 추가할 수 없었음  
  대신 setAttribute로 속성을 정의하여 'isselected' 속성이 true면 정해진 css 스타일링이 적용되게 함

- tabs 배열을 순회하면서 tab element를 생성하는 방법보다 명시적으로 tab1,tab2,tab3을 만드는 방법을 가장 먼저 생각했지만, 그러면 state로 관리할 데이터가 많아지고 클릭한 탭의 ref도 state로 관리해야 해서 효율이 떨어짐  
  그래서 tabs라는 오브젝트 배열을 이용해서 각각의 tab을 만들고 배열의 항목을 활용하는 방법으로 해결함

#### 실행방법

  <img src="https://user-images.githubusercontent.com/84840032/152754669-3039ebb2-907e-4dc8-9b0a-f28bab1f97cf.gif">

- 총 세가지의 탭으로 구성되어 있고, 클릭한 탭의 배경색이 변경되며 하단에 클릭한 탭의 번호가 표시됨
  <br><br>

## Tag.js

#### 구현방법

- input의 onKeyPress 속성을 이용하여 사용자가 Enter를 누르면 input의 내용(value)를 addTag라는 콜백함수에 전달함
- addTag 함수에서는 전달받은 value를 Tags state에 저장함 (spread syntax를 이용하여 기존 state를 복사 후 value를 추가함)
- 태그의 x 아이콘을 클릭하면 클릭한 태그의 index를 parameter로 전달하는 deleteTag 콜백함수가 실행  
  deleteTag 함수에서는 기존 state 배열에서 전달된 index의 tag를 삭제 한 state를 업데이트함

#### 어려웠던 점

- 태그들을 input 요소 안에 보이게 하는 것이 어려웠음  
  input 안에 태그들을 넣는게 아닌 div를 따로 만들고 css 스타일링을 input처럼 보이게 함  
  input 클릭 시, input을 감싸고 있는 div에 outline이 생기게 하는 부분이 조금 어려웠지만 :focus-within 이라는 가상클래스를 이용해서 해결함

#### 실행방법

  <img src="https://user-images.githubusercontent.com/84840032/152761434-746fdabe-db8e-4c4a-820c-aa858e2b36a5.gif">

- 단어를 입력 후 엔터를 누르면 태그가 생성됨
- 각 태그의 x 아이콘을 누르면 태그가 삭제됨
  <br><br><br>
  [맨 위로 가기](#custom-component)
