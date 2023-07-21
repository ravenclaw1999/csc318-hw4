import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator'; // Import the Calculator component from the same directory

function App() {
  return (
    <div>
      <h1>React Calculator</h1>
      <Calculator /> {/* Render the Calculator component */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;