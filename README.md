# 아마존 페이지 모작

javascript-amazon.gif

## 데모

[데모페이지](http://htmlhead.github.io/javascript-amazon)

## 소개

- 순수한 자바스크립트를 사용하여 구현하였습니다.
- 기능 단위로 재사용이 가능하도록 제작.
- 함수마다 꼭 한가지의 일을 하도록 만드려고 노력.
- 모든 기능들을 DOM이 모두 Load된 이후 실행.

## 주요 기능 구현 사항

### sticky-layer

- 헤더가 사라졌을 때 화면 상단에 유지되는 layer가 나타나는 기능
- 원래 scrollEvent를 사용하였지만, 이벤트가 너무 자주 발생된다고 판단하여 intersection-Observer를 사용. intersection-Observer는 폴리필 파일을 넣어 동작하도록 제작.

### auto-carousel

- 배경이미지의 배열을 받아 그 배열의 값을 넣고 빼고 하며 무한으로 동작되도록 제작.
- 버튼의 방향으로 움직이는 애니메이션을 만들고 그 애니메이션이 끝나면 다시 원래대로 돌아오도록 제작 하지만 배경이미지는 모두 변경되어 보기엔 오른쪽으로 넘어간 것처럼 느껴지도록 제작.
- 애니메이션이 끝날 때 까지 버튼을 눌러도 동작되지 않도록 제작.
- 자동으로 동작되도록 하는 함수에는 setTimeout 내부에 setTimeout을 실행하도록 제작.
- 이미지를 모두 담아두고 있는 큰 틀에 mouseover와 mouseout이벤트를 등록하여 마우스가 큰 틀에 들어와 있을 때에는 동작하지 않도록 구현.

### autocorrect

- setTimeout으로 debounce 제작
- keydown이벤트가 감지되면 이전에 있던 setTImeout을 제거해주고 keyup이벤트가 감지되면 다시 setTimeout을 설정하도록 제작
- arrowup, arrowdown이 입력되면 그에 상응하는 일을 하도록 제작
- hover시에도 색상이 변경되도록 제작

## 주의사항

- 자동검색완성 기능시 '안전하지 않은 스크립트 로드' 를 해주셔야 제대로 동작합니다.
- 페이지는 맥북 13인치 pro기준 90%의 사이즈, chrome 최신버전에 최적화 되어있습니다.
