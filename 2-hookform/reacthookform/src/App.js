import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./component/loginform";
import MyApp from "./controller";

function App() {
  return (
    <div>
      <LoginForm />
      <MyApp />
    </div>
  );
}

export default App;
