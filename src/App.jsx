import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Categories from './Components/Categories';
import Flags from './Components/Flags';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <HeroSection /> */}
      <Categories />
      <Flags />
      {/* <Footer /> */}
    </div>
  );
}
export default App;