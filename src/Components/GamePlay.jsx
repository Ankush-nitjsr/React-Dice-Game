import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
    const[score, setScore] = useState(0);
    const[selectedNumber, setSelectedNumber] = useState();
    const[currentDice, setCurrentDice] = useState(1);
    const[error, setError] = useState("");
    const[showRules, setShowRules] = useState(false);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        let diceNumber = generateRandomNumber();
        setCurrentDice((prev) => diceNumber);

        if (selectedNumber === diceNumber) {
            setScore((prev) => prev + diceNumber);
        } else {
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    };

  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore score={score} />
            <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore} >Reset Score</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules />}   
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 70px;
    .topSection {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: 40px;
    }
`;