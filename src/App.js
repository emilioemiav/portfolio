import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./MyProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Profile></Profile>
        <Home></Home>
      </body>
    </div>
  );
}

export default App;
