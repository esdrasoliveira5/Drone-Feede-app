import Home from './pages/Home'
import Provider from './context/DroneFedderProvider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Home/>
      </Provider>
    </div>
  )
}

export default App
