# Getting Started with Create React App
쇼핑몰 페이지 구현 시작!  


## 2023 01 29
- 깃허브 페이지는 Router를 이용하여 SPA로 구성하는 것이 조금 복잡했다. ( / 이외의 경로로 접근하면 404에러 홈페이지가 나온다 )  

이를 해결하기 위해 여러가지 검색을 해봤지만 가장 간단한 해결방법은 404페이지가 실행될 때, /로 redirection을 시킨 뒤 현재 접근 경로의 주소를 쿼리스트링으로 전달하는 것이였다.  

++ 경로에 별도의 저장소를 추가한 경우 (...github.io/example )  =>  .env 파일을 만들어서 배포 홈페이지의 링크를 적은다음, BrowserRouter 태그의 basename 속성을 이용하여 PUBLIC_URL을 경로에 붙여주면 된다.
