import './App.css';
import Footer from './Pages/Footer/Footer';
import Headers from './Pages/Header/Headers';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Headers/>
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
