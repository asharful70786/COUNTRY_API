import { useRouteError } from "react-router-dom";
import "./error.css"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <>Sorry, an unexpected error has occurred.</>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}