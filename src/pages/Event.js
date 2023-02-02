import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Event() {
    return (
      <div className="events">
        <h2>오늘의 이벤트</h2>
        <div className="eventContents">
          <Link to="one">
            <div className="one">이벤트1</div>
          </Link>
          <Link to="two">
            <div className="two">이벤트2</div>
          </Link>
        </div>
        <Outlet />
      </div>
    );
}

export default Event;