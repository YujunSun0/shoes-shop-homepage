import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"
import { addItem } from '../data/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountPlus } from "../data/store";

function Deets({shoes}) {

  console.log(shoes);


  let [str, setStr] = useState("");
  let { id } = useParams();
  let [name, setName] = useState("");
  let [hide, setHide] = useState("none");
  let [tap, setTap] = useState(0);
  let [fade2, setFade2] = useState("")


  let state = useSelector((state) => {
    return state;
  });
  console.log(state);

  let dispatch = useDispatch();


  useEffect(() => {
    let timer = setTimeout(() => {
      setName("none")
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  useEffect(() => {
    if (isNaN(+str) && str !== "") {
      setHide("")
    } else {
      setHide("hide")
    }
  }, [str])
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  useEffect(() => {
    setFade2("end")
    
  }, [])

  const changeStr = (event) => {
    setStr(event.target.value)
  }

  

    return (
      <div className={`deets start ${fade2}`}>
        <div className="input">
          <button className={name}>2초이내 구매시 할인</button>
          <div className={`popup ${hide}`}>숫자를 입력하시오</div>
          <input
            type="text"
            required=""
            placeholder="수량 입력"
            value={str}
            onChange={changeStr}
            maxLength="3"
          ></input>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" + (+id + 1) + ".jpg"
              }
              width="80%"
              alt="logo"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{shoes[id].title}</h4>
            <p>{shoes[id].content}</p>
            <p>price: {shoes[id].price}</p>
            <Link to="/cart">
              <button
                className="btn btn-danger"
                onClick={() =>
                  // state.cartData.some((obj) => obj.id !== id) //shoes = 배열  state= 객체
                    // ? changeCountPlus(shoes[id].id)
                    // :
                     dispatch(
                        // 조건문으로 id가 중복일 경우 ? count만 1 증가 : addItem 함수 실행
                        addItem({
                          id: shoes[id].id,
                          name: shoes[id].title,
                          count: 1,
                        })
                      )
                }
              >
                장바구니
              </button>
            </Link>
            <button className="btn btn-danger">구매하기</button>
          </div>
        </div>

        <DetailNav setTap={setTap} />
        <DetailPage tap={tap} id={id} shoes={shoes} />
      </div>
    );

}


function DetailNav({setTap}) {
  return (
    <Nav justify variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={() => setTap(0)}>
          상품상세
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => setTap(1)}>
          상품후기
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={() => setTap(2)}>
          사이즈 찾기
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={() => setTap(3)}>
          상품 안내
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function DetailPage({tap, id, shoes }) {
    
  return [
    <div className="detailPage">{shoes[id].title}</div>,
    <div className="detailPage">상품후기 내용</div>,
    <div className="detailPage">사이즈 찾기 내용</div>,
    <div className="detailPage">상품 안내 내용</div>,
  ][tap];  
  }

export default Deets;