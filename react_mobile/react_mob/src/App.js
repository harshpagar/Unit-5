import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MobileOS />
      <MobileManufacturers />
    </div>
  );
}

function MobileOS() {
  return (
    <div>
      <h1> Mobile Operating System </h1>
      <ul>
        {["Android", "Blackberry", "iphone", "Windows phone"].map((e) => (
          <li> {e} </li>
        ))}
      </ul>
    </div>
  );
}

function MobileManufacturers() {
  return (
    <div>
      <h1> Mobile Manufacturers </h1>
      <ul className="mmlist">
        {["samsung", "HTC", "Micromax", "Apple"].map((e) => (
          <li> {e} </li>
        ))}
      </ul>
    </div>
  );
}
export default App;