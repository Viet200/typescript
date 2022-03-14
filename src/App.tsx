import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowwInfo'
import type { ProductType } from './types/product';
function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Viet",
    age: 21
  });
  
  return (
    <div className="App">
      <ShowInfo info={info}/>
    </div>
  )
}

export default App