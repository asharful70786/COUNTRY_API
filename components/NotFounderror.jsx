import "./NotFoundError.css"



export default function NotFoundError() {
  return (
    <div className="not-found-error">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL and try again, or go back to the homepage.</p>
      <button onClick={() => history.back()}>Go Back to Homepage</button>
    </div>
  );
}