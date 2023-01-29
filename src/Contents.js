import { useState } from 'react';
import data from './data/data';
import { Link } from 'react-router-dom';

function Contents(props) {
const [shoes] = useState(data)

    return (
        <>
        {shoes.map((obj, i) => {
            return (
              <div className="col-md-4" key={i}>
                <Link to={`/deets/${obj.id}`}>
                  <img src={obj.image} alt="shoes" width="80%" />
                  <h4>{obj.title}</h4>
                </Link>
                <p>{obj.content}</p>
                <span>price:{obj.price}</span>
              </div>
            );
            })
            }  
        </>
  );
}

export default Contents