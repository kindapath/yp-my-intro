import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <div id="error-page">
      <h1>Упс!</h1>
      <p>Кажется вы зашли куда-то не туда.</p>
      <button onClick={clickHandler}>Назад</button>
    </div>
  );
}
