import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contents({shoes, childData}) {
  const [contentsData, setContentsData] = useState(shoes)
  const [btnClick, setBtnClick] = useState(0)
  const [hide, setHide] = useState("")

  console.log(btnClick);
  const changeBtnClick = (event) => {
    return event.target.value
  }
  
 

  return (
    <>
      <div className="contents">
        {contentsData.map((obj, i) => {
          return (
            <div className="col-md-4" key={i}>
              <Link to={`/deets/${obj.id}`}>
                <img
                  src={
                    "https://codingapple1.github.io/shop/shoes" +
                    (i + 1) +
                    ".jpg"
                  }
                  alt="shoes"
                  width="80%"
                />
                <h4>{obj.title}</h4>
              </Link>
              <p>{obj.content}</p>
              <span>price:{obj.price}</span>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <button
          className={`addBtn ${hide}`}
          value={btnClick}
          onClick={() => {
            setBtnClick(btnClick + 1);
            
            
            btnClick === 0 ? (
              axios.get("https://codingapple1.github.io/shop/data2.json")
                .then((res) => {
                  const serverData = res.data;
                  const copy = [...shoes, ...serverData];
                  setContentsData(copy);
                  childData(copy);
                })
                .catch(() => {
                  console.log("error");
                })
            ) : btnClick === 1 ? (
              axios.get("https://codingapple1.github.io/shop/data3.json")
                .then((res) => {
                  const serverData = res.data;
                  const copy = [...shoes, ...serverData];
                  setContentsData(copy);
                  childData(copy);
                })
                .catch(() => {
                  console.log("error");
                })
            ) : setHide("hide")
              
          }}
          onChange={changeBtnClick}
        >
          더보기
        </button>
      </div>
    </>
  );
}

export default Contents