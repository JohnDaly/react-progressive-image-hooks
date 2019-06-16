// External Dependencies
import React from 'react'

// Internal Dependencies

// Assets
import './App.css'

// Components
import { ProgressiveImage } from 'react-progressive-image-hooks'

const placeholder = 'https://loremflickr.com/100/50/forest?lock=1'
const fullSize = 'https://loremflickr.com/400/200/forest?lock=1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>React ProgressiveImage + Hooks</h1>
          <div style={{ width: '400px', height: '200px' }}>
            <ProgressiveImage placeholderSrc={placeholder} src={fullSize} />
          </div>
      </header>
    </div>
  );
}

export default App
