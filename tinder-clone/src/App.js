
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButton';
import TinderCards from './components/TinderCards';
function App() {
  return (
    <div className="app">

      {/* header */}
     <Header/>
      {/* tindercard */}
      <TinderCards/>
      {/* swipebtns */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
