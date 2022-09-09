import Header from "./assets/components/Header";
import SalesCard from "./assets/components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 return (
  <>
  <ToastContainer/>
  <h1><Header/></h1>
  <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
          </div>
      </section>
  </main>
  </>
 )
}

export default App
