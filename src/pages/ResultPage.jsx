import { useLocation, Link } from "react-router-dom";
import { ROUTES } from "../const";
import Button from "../components/Button/Button";

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  return (
    <div>
      <h1>Result</h1>
      <p>{`正解数は、${maxQuizLen}問中、${correctNumLen}問でした。`}</p>
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </div>
  );
}
