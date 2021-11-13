import React, {useState} from 'react';

const words = ['github', 'sebastian'];

export const GameContext = React.useContext({
    fullWord: [],
    hiddenWord: [],
    mistakes: 0,
    moves: 0,
})

const GameProvider = () => {
    const [gameState, setGameState] = useState(initialState);

    return (
     
    );
};

export default GameProvider;