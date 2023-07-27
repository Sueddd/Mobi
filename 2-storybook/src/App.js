import { useState } from "react";
import "./App.css";
import Pagenation from "./Pagenation";

function App() {
  const [page, setPage] = useState(1);
  return (
    <>
      <Pagenation numPages={10} page={page} setPage={setPage} />
    </>
  );
}

export default App;
