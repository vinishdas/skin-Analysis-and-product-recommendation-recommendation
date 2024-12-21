import { useState } from 'react';
import './App.css';
import SkinAnalysisPage from './SkinAnalysisPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SkinAnalysisPage />
    </>
  );
}

export default App;