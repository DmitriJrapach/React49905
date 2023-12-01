
import ItemListContainer from "./components/ItemListContainer/ItenListContainer";
import NavBar from "./components/NavBar/NavBar";


import 'bootstrap/dist/css/bootstrap.min.css';

const App= () => {

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBar />
      <ItemListContainer greeting='Compren'/>
    </div>
  )
}

export default App;