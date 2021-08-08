import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page could not be found</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
