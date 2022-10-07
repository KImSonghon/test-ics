
import './App.css';
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Placelist from './components/Placelist';



function App() {
   

   
  return (
    <div className="App">
        <Navbar/>
        <Aside/>
        <main className='main_container'>
            <Placelist />
            <Pagination />
            
        </main>
      
    </div>
  );
}

export default App;
