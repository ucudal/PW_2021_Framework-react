import logo from './logo.svg';
import {Cart} from "./Components/Cart";
import {Home} from "./Components/home";
import {itemData} from "./itemData";

function App() {
    return (
      
      <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12 " className="App">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div class="container" id="formulario">
                <Home productos={itemData}/>
                <Cart />
                
              </div>
          </form>
        </div>
        <p class="text-center text-gray-300 text-xs">
          React Framework
        </p>
    </div>
    );
}

export default App;
