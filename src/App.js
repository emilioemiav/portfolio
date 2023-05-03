import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./MyProfile";
import NavBar from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <Profile></Profile>
        <Home></Home>
      </body>
    </div>
  );
}

export default App;
