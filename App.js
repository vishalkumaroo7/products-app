import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import CreateNote from './components/notes/CreateNote';
import ListNote from './components/notes/ListNote';
import NavBar from './components/e-commerce/navbar/NavBar'
import ProductList from './components/e-commerce/productList/ProductList';

function App() {
  return (
    <div >
      {/* <Child1/>
      <Child2 /> */}
      {/* <CreateNote/>
      <ListNote/> */}
      <NavBar />
      <ProductList />
      
    </div>
  );
}

export default App;
