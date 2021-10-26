import logo from './logo.svg';
import {Cart} from "./Components/Cart";
import {Home} from "./Components/home";
import {itemData} from "./itemData";

function App() {
    return (
      <div className="App">
          <Home productos={itemData}/>
          <Cart />
      </div>
    );
}

export default App;
