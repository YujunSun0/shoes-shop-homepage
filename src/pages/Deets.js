import { useParams } from 'react-router-dom';



function Deets(props) {

  let { id } = useParams();
  

    return (
      <div className="deets">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                `https://YujunSun0.github.io/shoes-shop-homepage/img/shoes${+id + 1}.jpg`
              }
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