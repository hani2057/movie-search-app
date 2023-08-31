# 영화 검색 및 즐겨찾기 어플리케이션

배포 주소: https://movie-search-app-hani-kim.vercel.app/

로컬에서 실행할 경우

```
# CLONE REPOSITORY
git clone https://github.com/hani2057/movie-search-app.git
cd movie-search-app

# INSTALLATION
npm install

# SET ENVIRONMENTAL VARIABLE
touch .env.local
echo REACT_APP_API_KEY={your omdb api key} > .env.local

# START
npm run start
```

<br>

## 프로젝트 소개

<hr>
한줄소개: 영화를 검색하고 즐겨찾기할 수 있습니다. <br>
진행기간: 23.05.31. ~ 23.06.06. (1주) <br>
인원: 1명

<br>

- 영화를 검색하면 결과가 무한스크롤의 카드 형식으로 표시됩니다.
- 각 영화에는 즐겨찾기 여부가 아이콘으로 표시됩니다. 영화를 클릭하여 즐겨찾기에 추가 또는 즐겨찾기에서 제거할 수 있습니다. 즐겨찾기한 영화 정보는 다음 접속 시에도 확인할 수 있습니다.
- 하단탭 우측의 즐겨찾기 탭을 선택하면 유저가 즐겨찾기한 영화 목록을 확인할 수 있습니다. 영화를 클릭하면 즐겨찾기에서 제거할 수 있습니다.

<br>

## 사용 기술 스택

<hr>

| 구분             | 사용              |
| ---------------- | ----------------- |
| Language         | TypeScript        |
| UI Framework     | React             |
| State management | Recoil            |
| CSS in JS        | styled-components |
| Package manager  | npm               |
| Linter           | Prettier          |
| Deploy           | Vercel            |

<br>

## 상세 구현 내용

<hr>

### 하단 탭

- `react-router` 로 하단탭 버튼 클릭시 페이지 이동 routing
- 하단탭은 공통 레이아웃으로 고정함
- `styled-components`에서 `NavLink` 상속받아 svg 컴포넌트의 stroke와 fill 제어
- UX를 고려하여 현재 유저가 머무르고 있는 탭에 상단 바 별도 표시

### 영화 검색 탭

1. 영화 검색 기능
   - 검색어 입력창 autofocus로 페이지 진입시 바로 입력 가능하도록 함
   - 검색어 입력 후 엔터 또는 검색 버튼 클릭시 영화 검색
   - 검색어가 없거나 검색 결과가 없을 경우(`res.Response === "False"`) 검색어 입력창 하단에 에러메시지 표시
2. 영화 검색 결과 표시
   - 이미지, 제목, 연도, 타입을 포함한 컬럼 2개 카드 형태로 표시
   - `Intersection observer api`를 이용하여 무한 스크롤 구현
   - 검색어로 최초 호출시 totalResponse 개수를 store에 저장하여 더 불러올 결과가 있으면 호출함
   - api 요청시 isLoading 상태를 통해 spinner 표시
3. 즐겨찾기 여부 표시

   - 영화 겸색 api response data를 store의 즐겨찾기 목록과 비교하여 isFaved 속성 추가
   - 카드 우측 상단에 하트모양 아이콘으로 즐겨찾기 여부 표시

4. 즐겨찾기 추가/제거
   - React의 `portal`을 이용하여 모달 컴포넌트 생성
   - 영화 클릭시 isFaved 값에 따라 즐겨찾기에 추가 또는 즐겨찾기에서 제거 로직 실행
   - 즐겨찾기 추가/제거 상태에 따라 하트모양 아이콘 즉시 변경

### 즐겨찾기 탭

1. 즐겨찾기 목록 유지

   - `recoil-persist`를 이용하여 즐겨찾기 목록 로컬스토리지에 저장

2. 즐겨찾기 제거

   - 영화 검색 목록과 동일한 컴포넌트 사용으로 영화 클릭시 즐겨찾기에서 제거 가능
   - 즐겨찾기에서 제거시 목록에 즉시 반영

3. 드래그 앤 드롭
   - `react-dnd`를 이용하여 드래그 앤 드롭 구현
   - 즐겨찾기 목록에서 드래그 앤 드롭으로 순서 변경 가능

### 기타

- 404 Not Found 페이지에서 하단탭을 이용하여 바로 이동하도록 함
- 즐겨찾기에 추가/제거하는 함수를 개별 영화 컴포넌트에 구현하여 영화 검색 탭과 즐겨찾기 탭에서 동일한 컴포넌트 사용하도록 함
