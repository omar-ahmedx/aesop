import "./App.css";
import "./style/slide.css";
import "./style/section.css";
import Header from "./components/header";
import Body from "./components/bodyCare";
import About from "./components/about";
import Hands from "./components/hands";
import Convenience from "./components/convenience";
import Essentials from "./components/essentials";
import Stockists from "./components/stockists";
import Quote from "./components/quote";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About />
      <Hands />
      <Convenience />
      <Essentials />
      <Stockists />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
