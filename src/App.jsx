import "./App.css";
import useSearchUser from "./ViewModel/useSearchUser"

import FromUser from "./View/component/FromUserComponent";

import Post from "./View/component/PostComponent";
function App() {

  let {setSearch,searchAll} = useSearchUser();

  return (
    <div className="app">
      <FromUser/>
      <Post/>
    </div>
  );
}

export default App;
