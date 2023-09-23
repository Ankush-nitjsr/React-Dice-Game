import { useState } from "react";
import Homepage from "./Components/Homepage";
import GamePlay from "./Components/GamePlay";


function App() {

  const[isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Homepage toggle={toggleGamePlay} />}
      
    </>
  )
}

export default App;
