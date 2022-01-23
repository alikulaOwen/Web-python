import Navbar from "./component/navbar";
import Main from "./component/main";

export function App() {
  return <div className="flex flex-col">
      <Navbar/>
      <Main/>
  </div>;
}