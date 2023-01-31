# Getting Started with Create React App
리액트 강의를 수강하며 만드는 쇼핑몰 페이지 구현 시작!  [링크](https://yujunsun0.github.io/shoes-shop-homepage/)


## 2023 01 28
- 깃허브 페이지는 Router를 이용하여 SPA로 구성하는 것이 조금 복잡했다. ( / 이외의 경로로 접근하면 404에러 홈페이지가 나온다 )  

이를 해결하기 위해 여러가지 검색을 해봤지만 가장 간단한 해결방법은 404페이지가 실행될 때, /로 redirection을 시킨 뒤 현재 접근 경로의 주소를 쿼리스트링으로 전달하는 것이였다.  

++ 경로에 별도의 저장소를 추가한 경우 (...github.io/example )  =>  .env 파일을 만들어서 배포 홈페이지의 링크를 적은다음, BrowserRouter 태그의 basename 속성을 이용하여 PUBLIC_URL을 경로에 붙여주면 된다.

## 2023 01 30
- 수량을 입력하는 인풋 텍스트박스를 추가했다. 추후에 장바구니 리스트를 만들면 수량을 입력 후, 장바구니 추가 버튼을 눌러 장바구니에 추가되는 기능을 구현할 예정이다.  

++ CSS는 나중에..


![ezgif com-gif-maker](https://user-images.githubusercontent.com/120611048/215510563-f9ac74ab-9845-4f47-984c-dad34cd77ce9.gif)
