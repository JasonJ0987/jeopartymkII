import { BrowserRouter } from 'react-router-dom';
import { Game } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-auto">
          <Game/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
