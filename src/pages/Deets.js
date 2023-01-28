
function Deets() {
  
    return (
      <div className="deets">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://YujunSun0.github.io/shoes-shop-homepage/img/shoes1.jpg"
              }
              width="100%"
              alt="logo"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">White and Black</h4>
            <p>Born in France</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
}

export default Deets;