import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Deets(props) {

 
  let [str, setStr] = useState("");
  let { id } = useParams();
  let [name, setName] = useState("");
  let [hide, setHide] = useState("none");
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setName("none")
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  useEffect(() => {
    if (isNaN(+str)  && str !== "") {
      setHide("")
    } else {
      setHide("none")
    }
  },[str])

  const changeStr = (event) => {
    setStr(event.target.value)
  }

    return (
      <div className="deets">
        <div className='input'>
          <button className={name}>2초이내 구매시 할인</button>
          <div className={`popup ${hide}`}>숫자를 입력하시오</div>
          <input type="text" required="" placeholder='수량 입력' value={str} onChange={changeStr} maxLength="3"></input>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://YujunSun0.github.io/shoes-shop-homepage/img/shoes${
                +id + 1
              }.jpg`}
              width="100%"
              alt="logo"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
}

export default Deets;