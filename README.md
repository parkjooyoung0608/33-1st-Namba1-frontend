# 33기 1차 프로젝트 1팀 남바완
![namba1_logo](https://user-images.githubusercontent.com/72453080/171790066-206e9591-15f3-4ba0-97be-413f21d13694.png)
[🍽️Namba1 보러가기](http://35.89.113.177:8000/)   
[🍽️시연영상 보러가기](https://youtu.be/KlmscbOsnMc)

<br/>

## 🌼 프로젝트 소개 🌼

* 밀키트를 판매하는 커머스 사이트를 선정했습니다.
* 짧은 기간동안 개발에 집중할 수 있도록 디자인과 기획 일부를 [쿡킷 사이트](https://www.cjcookit.com/pc/main)를 참조하여 학습목적으로 만들었습니다.
* 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

<br/>

## 🌼 개발 인원 및 기간 🌼
**개발기간** : 2022/05/24~2022/06/04

<br/>

**개발인원 및 파트** : 
#### Frontend
- 김혜수 🐷 : Signup Page, Signin Page, Footer
- 박주영 🍋 : Review Page
- 천은별 🌟 : Menu Page
- 최현민 🐜 : Main Page, Nav

#### Backend
- 임한구 🎅🏻

<br/>

## 🌼 기술 🌼
**Front-End** : React.js 
<br/>
**Back-End** : Python, Django web framework, Bcrypt, MySQL, pyjwt
<br/>
**Common** : Git-Hub, slack, trello, AWS

<br/>

## 🌼 Review Page 구현사항 🌼

#### 베스트 리뷰 캐러셀 기능 구현

![캐러셀](https://user-images.githubusercontent.com/72453080/172112328-3db12651-fc4f-4603-aaab-2c72753cdc8a.gif)

- 베스트 리뷰 목데이터 `fetch`로 받아와서 `useState` 저장 후 작업
- `useRef hook`로 현재 slide dom 위치 파악 후 `useEffect` 로 slide가 변화할 때 렌더링 되면서 `slideRef.current.style.transition` `slideRef.current.style.transform` 로 `translateX` 조정

<br/>


#### 리뷰 검색 기능 구현
![검색](https://user-images.githubusercontent.com/72453080/172112498-501dd819-ad4c-41fd-9ddb-c85430927d33.gif)

- input onChange가 일어날때 `e.target.value`를 받아서 `useState`에 저장 
- `navigate()`로 저장된 value의 값을 Query Parameter에 맞춰서 `fetch get`과 `location.search`로 넘겨주기 
- `useEffect`로 deps 에 `location.search`을 넣어서 url이 바뀔때만 렌더링 되도록 구현

<br/>


#### 리뷰쓰기 기능 구현
![리뷰쓰기](https://user-images.githubusercontent.com/72453080/172112561-31c4bd51-c41e-4aba-bbc5-529800c8c93f.gif)

- POST로 유저가 입력한 데이터 넘겨주기
- 유저가 입력한 데이터 값 
  - 메뉴 선택 : 선택한 데이터의 `innerText` 와 `id` 값을 데이터로 보냄
  - 사진 첨부 : `base64`로 변환해서 보내는 방법으로 input file 데이터를 저장해서 보냄
  - 리뷰 쓰기 : `onChange` 이벤트 발생 시 `e.target.value`를 저장해서 데이터로 보냄
  - 완료 버튼 : 모든 필수값(메뉴선택, 리뷰쓰기 20자 이상)이 작성되었을 때 버튼 활성화 되도록 유효성 검사 구현

<br/>


#### 포토리뷰 모아보기 필터 기능 구현
- Boolean 값을 useState에 저장 후 포토리뷰 모아보기 버튼 클릭 시 현재 Boolean값과 반대일 경우 `navigate()`로 Query Parameter에 맞춰서 url 이동
- `fetch get`과 `location.search`로 현재 url 정보를 받아서 리뷰리스트 state에 저장 

<br/>


#### 리뷰 리스트 페이지네이션 구현
![페이지네이션](https://user-images.githubusercontent.com/72453080/172112646-5569166e-006e-409d-be4c-87d0538a2093.gif)

- 게시물 수(limit), 현재 페이지 번호(page)를 상태를 저장
- 첫 게시물의 위치(offset)을 계산
- 계산된 offset과 limit를 Query Parameter에 맞춰서 변수에 저장 
- navigate()로 url 변경
- `fetch get`과 `location.search`로 현재 url 정보를 받아서 리뷰리스트 state에 저장해서 해당 페이지 버튼 클릭 시 화면에 보여지도록 구현


<br/>

## 🌼 프로젝트 진행 과정 🌼
||Trello|Daily Standup Meeting|
|------|---|---|
|협업 방식|칸반보드를 활용한 회의록 작성 및 진행상황 공유|매일 아침 30분동안 진행사항과 오늘 할 작업 내용 공유|
|IMG|![image](https://user-images.githubusercontent.com/72453080/172017656-5a83e3f5-34c4-44b8-b600-39ed7c6600d0.png)|![image](https://user-images.githubusercontent.com/72453080/172017691-c160d276-3004-4dbc-966b-d761d8c749b8.png)|



