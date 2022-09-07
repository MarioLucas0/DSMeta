import Header from "./assets/components/Header";
import SalesCard from "./assets/components/SalesCard";

function App() {
 return (
  <>
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
