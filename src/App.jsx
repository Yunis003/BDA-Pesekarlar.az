import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Categories from './Components/Categories';
import Flags from './Components/Flags';
import Card from './Components/Card';
import JoinUsCard from './Components/JoinUsCard';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeroSection />
      <Categories />
      <Flags />
      <Card />
      <JoinUsCard />
      {/* <Footer /> */}
    </div>
  );
}
export default App;