import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/QuizContext";
import "./App.css";

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
