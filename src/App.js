import "./App.scss";
import { Header, Footer, About, Skills, Work } from "./container/index";

import { Navbar } from "./components/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
