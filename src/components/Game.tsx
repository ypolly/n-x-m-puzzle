import { useState } from "react";
import Board from "./Board";
import Text from "../elements/StyledText";
import Menu from "./Menu";
import GameWrapper from "../elements/StyledGame";

const Game = () => {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const onStartClick = () => {
    setShowIntro(false);
  };

  const handleSetCols = (cal: number) => {
    setCols(cal);
  };
  const handleSetRows = (row: number) => {
    setRows(row);
  };

  return (
    <GameWrapper>
      <Text> N x M Puzzle</Text>
      <Menu
        setCols={handleSetCols}
        setRows={handleSetRows}
        onStartClick={onStartClick}
      />
      {showIntro ? (
        <Text>
          Welcome to the 'n x m' puzzle! Your goal is to rearrange the tiles on
          the grid to match the incremental arrangement (1, 2, 3...). Use the
          settings above to choose the size of the board by selecting columns
          and rows. Good luck, and have fun!
        </Text>
      ) : (
        <Board rows={rows} cols={cols} />
      )}
    </GameWrapper>
  );
};

export default Game;
