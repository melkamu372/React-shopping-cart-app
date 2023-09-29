import React,{ useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import ContextApp from '../src/context/context'
function App() {
 
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  },[])

  return (
    <>
    <h1>Our First Test</h1>
    {/* <ContextApp/> */}
    {/* <Link to="/home">Profile page</Link> */}
</>
  )
}

export default App
