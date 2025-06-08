import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Categories from './Components/Categories';
import Flags from './Components/Flags';
import Card from './Components/Card';
import JoinUsCard from './Components/JoinUsCard';
import Comments from './Components/Comments';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeroSection />
      <Categories />
      <Flags />
      <Card />
      <Comments />
      <JoinUsCard />
      {/* <Footer /> */}
    </div>
  );
}
export default App;