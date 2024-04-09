import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
      <div className="film-card">
        Film 1:
        <Stars count={3} />
      </div>
      <div className="film-card">
        Film 2:
        <Stars count={2} />
      </div>
    </>
  )
}

export default App
