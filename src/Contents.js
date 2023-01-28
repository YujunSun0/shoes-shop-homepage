import { useState } from 'react';
import data from './data/data';

function Contents(props) {
const [shoes] = useState(data)

    return (
        <>
        {shoes.map((obj, i) => {
            return (
              <div className="col-md-4" key={i}>
                <img src={obj.image} alt="shoes" width="80%" />
                <h4>{obj.title}</h4>
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