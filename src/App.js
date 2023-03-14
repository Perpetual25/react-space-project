import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className='section1'>
       <div className='words'>
        <div className='text'>
          <p className='travel'>SO, YOU WANT TO TRAVEL TO</p>
          <div className='space'> SPACE </div>
          <div className='tiny'>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</div>
        </div>
       </div>
       <div className='explore'>
        <div className='circle'>
          <p>EXPLORE</p>
        </div>
       </div>
      </section>
    </div>
  );
}

export default App;
