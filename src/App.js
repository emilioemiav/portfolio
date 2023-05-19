import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./MyProfile";
import NavBar from "./Navbar";
import Contacto from "./Contacto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body style={{ marginTop: "10%" }}>
        <Profile />
        <Home />
        <Contacto />
      </body>
    </div>
  );
}

export default App;
