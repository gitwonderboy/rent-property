import { Link } from 'react-router-dom';

function ErrorRoute() {
  return (
    <>
      <h1>404 Not Found</h1>
      <h2>
        Go to home page click <Link to="/">here</Link>
      </h2>
    </>
  );
}

export default ErrorRoute;
